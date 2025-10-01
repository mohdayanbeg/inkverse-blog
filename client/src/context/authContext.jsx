import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { serverUri } from "../App";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async ({username,password}) => {
    try {
        const res = await axios.post(`${serverUri}/api/auth/login`, { username, password }, { withCredentials: true })
    setCurrentUser(res.data);
    } catch (error) {
        throw error
    }
  };

  const logout = async () => {
    try {
        const res = await axios.post(`${serverUri}/api/auth/logout`,{},{ withCredentials: true })
    setCurrentUser(null);
    } catch (error) {
        throw error
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};