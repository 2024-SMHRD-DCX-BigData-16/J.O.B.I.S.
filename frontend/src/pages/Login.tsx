import styles from "./Login.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 연결 예정
    console.log("로그인 시도:", { username, password });
  };

  return (
    <div className={styles.authContainer}>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
        <p onClick={() => navigate("/signup")}>회원가입 하기</p>
      </form>
    </div>
  );
};

export default Login;
