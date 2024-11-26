import React from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import {useState} from "react";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authenticate = () => {
    if (!username || !password) {
        return setError("Username and password are required!");
    }

    const user = users.find((user) => user.username === username);

    if (!user) {
        return setError("User not found!");
    }

    if (user.password !== password) {
        return setError("Password is wrong!");
    }

    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>

      <div className="">
        <p>Username</p>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="">
        <p>Email</p>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={authenticate}>Login</button>

      {error && (
        <div>
          <p>Error :</p>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
