import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<{
  logout?: any;
  signup?: any;
  signin?: any;
  loading?: boolean;
  user?: object;
  isAuthenticated?: boolean;
  errors?: any;
}>({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
