import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const authenticate = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={authenticate}>Login</button>
    </div>
  );
};

export default Login;
