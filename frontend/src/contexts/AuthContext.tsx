// src/contexts/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface UserInfoType {
  nickname: string;
  id?: string; // 선택적 속성으로 추가
  email?: string;
  username?: string;
  // 기타 필요한 정보들을 여기에 추가
}

interface AuthContextType {
  isLoggedIn: boolean;
  login: (id: string, password: string) => Promise<void>; // username 대신 id로 변경
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  userInfo: UserInfoType | null;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | null>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext)!;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);

  const login = async (id: string, password: string) => { 
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, password }), 
      });

      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const data = await response.json();
      setUserInfo({ nickname: data.nickname, id: data.id, email: data.email }); // username 대신 id로 변경, 예시
      setIsLoggedIn(true);
    } catch (error) {
      console.error("로그인 실패:", error);
      throw error;
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('회원가입 실패');
      }

      const data = await response.json();
      setUserInfo({ nickname: data.nickname, id: data.id, email: data.email }); // username 대신 id로 변경, 예시
      setIsLoggedIn(true);
    } catch (error) {
      console.error("회원가입 실패:", error);
      throw error;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, signup, logout, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};