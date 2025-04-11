# Routers/user.py
from fastapi import APIRouter, Form, HTTPException 
# APIRouter: 라우터 나누기
from DB.Connection import # DB 연결 함수 호출
from pydantic import BaseModel

router = APIRouter() # 메인이랑 나눠서 깔끔하게 코딩

# 유저 데이터 형식 정의
# class User(BaseModel):
#     username: str
#     password: str

@router.post("/join")
async def join()

# 로그인 API
@router.post("/login")  # HTML <form> 태그에서 보내는 값 받기!
async def login(idx: int = Form(...), name: str = Form(...)):
    # DB 연결 코드
   
