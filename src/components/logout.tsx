import LoginPage from "../pages/LoginPage";

import { useEffect, useState } from "react";

import { Logout } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LogoutForm() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      logout();

      navigate("/login");
    }
  }, [isAuthenticated]);

  return <></>;
}

export default LogoutForm;
