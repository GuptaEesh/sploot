import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();
const tokenInfo = {
  token: localStorage.getItem("token"),
};
const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(tokenInfo);
  const isAuthenticated = authToken.token ? true : false;
  const login = (data) => {
    localStorage.setItem("token", JSON.stringify(data.authToken));
    setAuthToken({
      token: data.authToken,
    });
  };
  return (
    <AuthContext.Provider value={{ login, isAuthenticated, authToken }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
