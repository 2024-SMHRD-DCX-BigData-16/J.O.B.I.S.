import styles from "./Signup.module.scss";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    gender: "",
    address: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 처리 로직 연결 예정
    console.log("회원가입 정보:", formData);
  };

  return (
    <div className={styles.authContainer}>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="이메일" onChange={handleChange} />
        <input name="username" type="text" placeholder="아이디" onChange={handleChange} />
        <input name="password" type="password" placeholder="비밀번호" onChange={handleChange} />
        <input name="confirmPassword" type="password" placeholder="비밀번호 확인" onChange={handleChange} />
        <input name="nickname" type="text" placeholder="닉네임" onChange={handleChange} />
        
        <div className={styles.genderButtons}>
          <label>
            <input type="radio" name="gender" value="male" onChange={handleChange} />
            남자
          </label>
          <label>
            <input type="radio" name="gender" value="female" onChange={handleChange} />
            여자
          </label>
        </div>

        <input name="address" type="text" placeholder="주소" onChange={handleChange} />
        <input name="phone" type="tel" placeholder="연락처" onChange={handleChange} />

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Signup;
