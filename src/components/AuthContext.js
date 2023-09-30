import React, { createContext, useState, useContext } from "react";
// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook for using the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
