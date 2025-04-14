// src/App.tsx
import React, { createContext, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Interview from "./pages/Interview";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { NameJobContext } from "./types/types";
import { AuthProvider } from "./contexts/AuthContext"; // 새로 만든 AuthContext

export const nameJobContext = createContext<NameJobContext | undefined>(
  undefined
);

function App() {
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");

  return (
    <AuthProvider>
      <nameJobContext.Provider value={{ name, setName, job, setJob }}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/interview/:selectedMode" element={<Interview />} />
          </Routes>
        </HashRouter>
      </nameJobContext.Provider>
    </AuthProvider>
  );
}

export default App;
