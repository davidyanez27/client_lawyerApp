import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<{
    signup?: any;
    signin?:any;
    user?: object;
    isAuthenticated?: boolean;
    errors?:any;
  }>({});



export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
