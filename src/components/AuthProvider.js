import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AuthContext from "./AuthContext";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // You can set the initial user state to null
  const navigate = useNavigate();

  // Add functions for handling authentication actions (e.g., login, logout)

  const login = (userData) => {
    // Implement your login logic here, set the user object
    // Example: setUser(userData);
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  // Define the context value
  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
