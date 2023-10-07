import { useEffect, useState } from "react";


import { AuthContext } from "./AuthContext";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import { User, ValidationError, ZodError, props } from '../interfaces/interfaces';
import Cookies from "js-cookie";


export const AuthProvider = ({ children }: props) => {
  const [user, setUSer] = useState<Partial<User>>({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);



  function parseError (error: object) {
    const typeError = (error as ValidationError).response.data.message;
    if(typeError == undefined){
      setErrors((error as ZodError).response.data);
    }
    else{
      setErrors((error as ValidationError).response.data.message);
    }
  } 


  const signup = async (values: User) => {
    try {
      values.id = Number(values.id);
      const res = await registerRequest(values);
      console.log(res.data);
      setUSer(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      parseError(error as object)
    }
  };


  const signin = async (values: User) =>{
    try {
      const res = await loginRequest(values);
      console.log(res);
      setUSer(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      parseError(error as object)

    }
  }

  useEffect(()=>{
    if(errors.length>0){
      const timer = setTimeout(()=>{
        setErrors([]);
      },2500);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(()=>{
    
    async function checkLogin(){
      const cookies = Cookies.get()
      
      if(!cookies.token){
        setIsAuthenticated(false);
        setLoading(false);
        setUSer({});
        return;
      }


        try {
          const res = await verifyTokenRequest(cookies)
          //console.log(res)
          if(!res.data) {
            setIsAuthenticated(false);
            setLoading(false);
            return;
          }

          setIsAuthenticated(true);
          setUSer(res.data);
          setLoading(false);
        } catch (error) {
          setIsAuthenticated(false);
          setUSer({});
          setLoading(false);
        }

      console.log(cookies.token);
    }
    checkLogin();
  },[]);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        loading,
        user,
        isAuthenticated, 
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
