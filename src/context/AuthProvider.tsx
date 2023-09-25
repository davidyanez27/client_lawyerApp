import { useState } from "react";

import { AuthContext } from "./AuthContext";
import { registerRequest } from "../api/auth";
import { User } from "../interfaces/interfaces";


interface props {
    children: JSX.Element | JSX.Element[];
  }
  
  
export const AuthProvider = ({ children }: props) => {
    const [user, setUSer] = useState(null);
  
    const signup = async (values: User) => {
      values.id = Number(values.id);
      const res = await registerRequest(values);
      console.log(res.data);
      setUSer(res.data);
    };
  
    return (
      <AuthContext.Provider
        value={{
          signup,
          user,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  