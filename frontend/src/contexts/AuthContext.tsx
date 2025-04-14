// src/contexts/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext)!;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email: string, password: string) => {
    // 실제로는 API 요청
    console.log("로그인 요청:", email, password);
    setIsLoggedIn(true);
  };

  const signup = (email: string, password: string) => {
    console.log("회원가입 요청:", email, password);
    setIsLoggedIn(true);
  };

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
