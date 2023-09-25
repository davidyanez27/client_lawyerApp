import { createContext, useContext } from "react";

export const AuthContext = createContext<{
    signup?: any;
    user?: any;
  }>({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
