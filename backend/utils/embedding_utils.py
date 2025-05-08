from langchain_openai import OpenAIEmbeddings
from dotenv import load_dotenv
import os
import numpy as np

load_dotenv()
openai_key = os.getenv("OPENAI_API_KEY")

# OpenAI Embedding 객체
embedding_model = OpenAIEmbeddings(openai_api_key=openai_key)

# 단일 텍스트 임베딩
def get_embedding(text: str) -> list:
    return embedding_model.embed_query(text)

# 코사인 유사도 계산
def compute_cosine_similarity(vec1: list, vec2: list) -> float:
    vec1 = np.array(vec1)
    vec2 = np.array(vec2)
    return np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2))