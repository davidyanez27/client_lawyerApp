import { useState } from "react";

import { AuthContext } from "./AuthContext";
import { registerRequest } from "../api/auth";
import { User, ValidationError } from "../interfaces/interfaces";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
  const [user, setUSer] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState({});

  const signup = async (values: User) => {
    try {
      values.id = Number(values.id);
      const res = await registerRequest(values);
      console.log(res.data);
      setUSer(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log((error as ValidationError).response.data.message);
      console.log(typeof(error as ValidationError).response.data);
      setErrors((error as ValidationError).response.data.message);

    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated, 
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
