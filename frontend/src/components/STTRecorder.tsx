import React, { useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../constants/api";

interface STTRecorderProps {
  onTranscribed: (text: string) => void;
  trigger?: boolean;
}

const STTRecorder: React.FC<STTRecorderProps> = ({
  onTranscribed,
  trigger,
}) => {
  useEffect(() => {
    if (!trigger) return;

    const startRecording = () => {
      navigator.mediaDevices
        .getUserMedia({
          audio: {
            sampleRate: 16000,
            channelCount: 1,
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        })
        .then((stream) => {
          const mediaRecorder = new MediaRecorder(stream, {
            mimeType: "audio/webm;codecs=opus",
            audioBitsPerSecond: 128000,
          });

          const chunks: Blob[] = [];

          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              chunks.push(event.data);
              console.log("녹음 데이터 수신:", event.data);
            }
          };

          mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { type: "audio/webm" });
            const formData = new FormData();
            formData.append("audio", blob, "recording.webm");

            // 백엔드로 전송
            fetch(`${API_BASE_URL}/stt`, {
              method: "POST",
              body: formData,
            })
              .then((res) => res.json())
              .then((data) => console.log("STT 응답:", data))
              .catch((err) => console.error("STT 요청 실패:", err));
          };

          mediaRecorder.start();
          console.log("녹음 시작");

          // 10초 후 자동 종료
          setTimeout(() => {
            mediaRecorder.stop();
            console.log("녹음 종료");
          }, 10000);
        })
        .catch((err) => console.error("마이크 접근 실패:", err));
    };

    startRecording();
  }, [trigger, onTranscribed]);

  return null; // 버튼 없이 동작하므로 렌더링할 UI 없음
};

export default STTRecorder;
