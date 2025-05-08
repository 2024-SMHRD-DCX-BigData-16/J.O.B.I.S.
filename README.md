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
![Image](https://github.com/user-attachments/assets/ddd73dc8-6748-4c6d-bac6-f457117c0e8e)
```md
[사용자] → [웹 브라우저] → [FastAPI] → [PostgreDB]
```
- 사용자는 웹 브라우저를 통해 서비스에 접속
- 서버는 React 프레임워크를 기반으로 구축
- 데이터베이스는 PostgreDB, ChromaDB를 사용하여 데이터 저장 및 관리
- OCR, Tesseract를 활용한 pdf파일 텍스트 추출 및 DB 저장
- OpenAI API를 사용하여 면접진행 및 자기소개서 작성 기능 구현
- ChromaDB 채용 공고 중인 기업 크롤링 데이터 저장, 유사성 비교 진행 후 기업 추천 기능 구현

---

## 6. 팀원 소개

| 이름 | 역할 |
|------|------|
| **문선웅** | 프로젝트 총괄, Back-end 담당, 산출문서 담당, 데이터 수집, 산출문서 담당, AI 면접 기능 담당 |
| **정경현** | Back-end 담당, 데이터 수집, 산출문서 작성, AI 자소서 기능 담당 |
| **박명훈** | Back-end 담당, 데이터 수집, 산출문서 작성, 기업 추천 담당 |
| **박창선** | Front-end 담당, 산출문서 작성, 웹사이트 제작, 반응형 웹사이트 구현 |



---

## 7. 추가 예정 서비스

**AI 화상 면접**<br>
**멘토-멘티 시스템**<br>
**다국어 지원 확대**<br>
**해외 채용 문화 및 트렌드 반영**<br>
**글로벌 기업 데이터베이스 구축 및 연계**<br>
**모바일 앱 개발 및 크로스 플랫폼 지원**<br>
**개인화된 대시보드 및 진행 상황 트래킹 기능 추가**<br>
---

## 8. 기대효과 및 활용 방안

*구직자의 취업 준비 효율성 대폭 향상* <br>
**객관적 피드백을 통한 역량 강화** <br>
**기업-구직자 간 최적의 매칭 촉진**<br>
**실제 기업 HR 부서와의 연계 및 B2B 모델 구상**<br>
**취업 교육 프로그램과의 통합 서비스 개발**<br>
**대학 및 교육 기관과의 파트너십 확대**<br>
---

### 📄[화면설계서 링크](https://www.figma.com/design/PkABMn1ZnHp2tuFcA8yRcM/-%EA%B8%B0%ED%9A%8D-%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84%EC%84%9C-%ED%85%9C%ED%94%8C%EB%A6%BF-UX-UI-Wireframe-Template-KOR--UX-UI--Community-?node-id=0-1&p=f)



