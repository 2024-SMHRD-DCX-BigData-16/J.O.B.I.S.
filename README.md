<p align="center">
  <img width="244" src="https://github.com/user-attachments/assets/253edd78-ab41-4670-9228-683c55d5affc">
</p>


# J.O.B.I.S 선웅팀(실전프로젝트)
> OpenAI API와LangChain 모델을 활용한 맞춤형 취업준비 서비스
- 자기소개서 및 이력서, 포트폴리오를 첨부한 파일을 토대로 면접관 페르소나(유형)을 선택하여 모의면접 진행 및 피드백 제공
- 키워드를 통한 자기소개서 생성 및 미리 작성한 자기소개서 피드백
- Vector DB(Chroma)와 Embedding을 통한 유사도 검색으로 면접 실행 및 회사, 멘토 추천 
## ✍🏻 프로젝트 소개
<p align="center">
 <img src="https://img.shields.io/badge/React-v18.2.0-9cf?logo=React" alt="React" />
  <img src="https://img.shields.io/badge/FastAPI-v0.115.9-009688?logo=fastapi" alt="FastAPI" />
  <img src="https://img.shields.io/badge/PostgreSQL-v13.10-blue?logo=Postgresql" alt="PostgreSQL"/>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-v5.3.3-3178C6?logo=typescript&logoColor=white" alt="typescript" />
  <img src="https://img.shields.io/badge/SCSS-v1.62.1-CC6699?logo=sass&logoColor=white" alt="scss" />
  <img src="https://img.shields.io/badge/LangChain-⚡-green?logo=python" alt="langchain"/>
  <img src="https://img.shields.io/badge/Chroma-VectorDB-yellow?logo=databricks" alt="chroma"/>
  <img src="https://img.shields.io/badge/OpenAI-API-black?logo=openai&logoColor=white" alt="openai"/>
  <a>
    <img width="600" src="https://github.com/user-attachments/assets/8f830045-62df-4a3f-a1c5-f60534805662" alt="JOBIS 메인화면" />
  </a>
</p>

---
### 1. 프로젝트 개요
#### 주제 : OpenAI와 Langchain 모델을 활용한 맞춤형 취업 지원 서비스


사용자 1 : 다양한 유형의 면접을 준비하는 취준생
- 다양한 면접관 페르소나를 선택하여 면접진행
- 면접 후 사용자의 답변에 따른 피드백 제공
---
사용자 2 : 자기소개서 작성에 어려움을 겪는 취준생
- 사용자가 첨부한 이력서, 자기소개서, 포트폴리오 기반 + 사용자 입력값에 따른 자기소개서 작성
- 사전 자소서를 작성한 사용자에겐 맞춤형 피드백 제공
---
사용자 3 : 자신의 스펙과 관련된 기업 추천, 멘토 추천을 받고 싶은 취준생
- 사용자가 원하는 직무, 연봉 등 입력값과 유사성 높은 기업 추천
- 자신에게 맞는 적절한 멘토 검색 기능
  
---
### 2. 프로젝트 기간

2025-03-17 ~2025-05-12

## 3. 주요 기능

- 회원가입 및 로그인
- AI면접 & 면접 피드백
- 자기소개서 작성 & 자기소개서 피드백
- 기업 추천 & 멘토추천

---

### 4. 개발환경
### Frontend
<p align="left">
 <img src="https://img.shields.io/badge/React-v18.2.0-9cf?logo=React" alt="React" />
 <img src="https://img.shields.io/badge/SCSS-v1.62.1-CC6699?logo=sass&logoColor=white" alt="scss" />
</p>

### Backend
<p align="left">
 <img src="https://img.shields.io/badge/TypeScript-v5.3.3-3178C6?logo=typescript&logoColor=white" alt="typescript" />
 <img src="https://img.shields.io/badge/LangChain-⚡-green?logo=python" alt="langchain"/>
 <img src="https://img.shields.io/badge/TypeScript-v5.3.3-3178C6?logo=typescript&logoColor=white" alt="typescript" />
</p>

### Database
<p align="left">
<img src="https://img.shields.io/badge/PostgreSQL-v13.10-blue?logo=Postgresql" alt="PostgreSQL"/>
<img src="https://img.shields.io/badge/Chroma-VectorDB-yellow?logo=databricks" alt="chroma"/>
</p>

### API
<p align="left">
 <img src="https://img.shields.io/badge/OpenAI-API-black?logo=openai&logoColor=white" alt="openai"/>
</p>

---

## 5. 시스템 아키텍처

**구성도**
**구성도**<br>
<img src="![Image](https://github.com/user-attachments/assets/ddd73dc8-6748-4c6d-bac6-f457117c0e8e)" width="800" height="400"/>
```md
[사용자] → [웹 브라우저] → [Spring Boot 서버] → [MySQL DB]
```
- 사용자는 웹 브라우저를 통해 서비스에 접속
- 서버는 Spring Boot 프레임워크를 기반으로 구축
- 데이터베이스는 MySQL을 사용하여 데이터 저장 및 관리
- MyBatis를 활용하여 데이터베이스와의 상호 작용 처리
- Kakao Pay API를 사용하여 결제 기능 구현
- Kakao Map API를 사용하여 지도 및 위치 정보 제공

---

## 6. 팀원 소개

| 이름 | 역할 |
|------|------|
| **박창선** | Front-end 담당, 산출문서 작성, 웹사이트 제작, 반응형 웹사이트 구현 |
| **손민찬** | Front/Back-end 담당, 프로젝트 총괄, 산출문서 작성, 지도/결제 API 연결 |
| **정경현** | Back-end 담당, 데이터 수집, 산출문서 담당 |

---

## 7. 추가 예정 서비스

**사용자 위치 기반 휴게소 추천**<br>
**휴게소 주변 관광지 추천**<br>
**공공 API 활용한 최신 데이터 수집**

---

## 8. 기대효과 및 활용 방안

**고속도로 휴게소 이용객들에게 편리하고 효율적인 서비스 제공** <br>
**휴게소 운영 관리의 효율성 증대** <br>
**비대면 서비스 강화를 통한 편의성 증대**

---

### 📄[화면설계서 링크](https://www.figma.com/design/PkABMn1ZnHp2tuFcA8yRcM/-%EA%B8%B0%ED%9A%8D-%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84%EC%84%9C-%ED%85%9C%ED%94%8C%EB%A6%BF-UX-UI-Wireframe-Template-KOR--UX-UI--Community-?node-id=0-1&p=f)



