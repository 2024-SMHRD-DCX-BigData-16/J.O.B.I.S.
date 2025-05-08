import os
import shutil
import uuid
import subprocess
import whisper
from fastapi import APIRouter, UploadFile, File, HTTPException
from openai import OpenAI
from dotenv import load_dotenv
from pydub import AudioSegment
from pydub.silence import split_on_silence

load_dotenv()
router = APIRouter(tags=["voice"])
openai = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# 로컬 Whisper 모델 로드 (large 모델)
local_model = whisper.load_model("large")

def convert_audio_to_wav(input_path: str, output_path: str):
    os.makedirs("recordings", exist_ok=True)
    subprocess.run([
        "ffmpeg", "-y", "-i", input_path,
        "-ar", "16000", "-ac", "1",
        "-c:a", "pcm_s16le",
        "-af", "highpass=f=200, lowpass=f=3000",
        output_path
    ], check=True)

def preprocess_audio(input_path: str, output_path: str):
    try:
        print("오디오 전처리 시작:", input_path)
        audio = AudioSegment.from_file(input_path, format="wav")
        
        # 기본 볼륨 정규화
        normalized = audio.apply_gain(-audio.max_dBFS)

        # 노이즈 필터링
        filtered = normalized.low_pass_filter(3000).high_pass_filter(200)

        # 최종 파일 저장
        filtered.export(output_path, format="wav")
        print("볼륨 정규화 및 노이즈 제거 완료:", output_path)
    
    except Exception as e:
        print("전처리 실패:", e)
        raise e

@router.post("/stt")
async def speech_to_text(audio: UploadFile = File(...)):
    temp_filename = f"temp_{uuid.uuid4().hex}.webm"
    converted_filename = os.path.join("recordings", f"converted_{uuid.uuid4().hex}.wav")
    preprocessed_filename = os.path.join("recordings", f"preprocessed_{uuid.uuid4().hex}.wav")  # ✅ 괄호 수정

    try:
        print("📎 업로드된 파일 이름:", audio.filename)
        print("📎 콘텐츠 타입:", audio.content_type)

        # 1. .webm 파일로 저장
        with open(temp_filename, "wb") as buffer:
            shutil.copyfileobj(audio.file, buffer)

        if not os.path.exists(temp_filename):
            raise HTTPException(status_code=500, detail="입력 파일 저장 실패")

        print(f" 저장 완료: {temp_filename}")

        # 2. 디버그용 파일 복사 (원본 저장)
        SAVE_FOR_DEBUG = True
        if SAVE_FOR_DEBUG:
            os.makedirs("recordings", exist_ok=True)
            debug_path = os.path.join("recordings", temp_filename)
            shutil.copy(temp_filename, debug_path)
            print(f"디버깅용 복사 완료: {debug_path}")

        # 3. Whisper 최적화 포맷으로 변환 (16kHz, mono, pcm_s16le)
        convert_audio_to_wav(temp_filename, converted_filename)
        print(f"변환 완료: {converted_filename}")

        # 4. 볼륨 정규화 및 노이즈 제거
        preprocess_audio(converted_filename, preprocessed_filename)
        print(f"전처리 완료: {preprocessed_filename}")

        # 5. 로컬 Whisper 모델 사용
        print("🧠 로컬 Whisper 모델 로드 완료")
        print(f"📝 파일 경로 확인: {preprocessed_filename}")

        # 실제 Whisper 호출
        try:
            result = local_model.transcribe(
                preprocessed_filename,
                language="ko",
                fp16=False,  # CPU에서 FP16 사용 불가 시 명시적으로 끄기
                temperature=0.0,  # 더욱 정확한 결과를 위해 낮은 온도 설정
                suppress_tokens="-1",  # 자주 발생하는 소음을 억제
            )
            print("✅ 로컬 Whisper 호출 성공:", result)

            transcript = result.get("text", "").strip()
            if not transcript:
                transcript = "Whisper 응답이 비어있습니다."
            print("최종 텍스트:", transcript)

            return {"text": transcript}

        except Exception as whisper_err:
            print("❌ 로컬 Whisper 호출 실패:", whisper_err)
            raise HTTPException(status_code=500, detail=f"로컬 Whisper 호출 실패: {str(whisper_err)}")
    
    except Exception as e:
        print("STT 처리 실패:", e)
        raise HTTPException(status_code=500, detail=f"STT 처리 실패: {str(e)}")
    
    finally:
        # 6. 임시 파일 삭제
        for path in [temp_filename, converted_filename, preprocessed_filename]:
            if os.path.exists(path):
                os.remove(path)