import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const token = await loginUser(username, password);
      console.log(token);
      localStorage.setItem("token", token.accessToken);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="form-container">
      <section className="login-page">
        <h2>Login</h2>
        <form action="/">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="button" className="submit-btn" onClick={login}>
            Login
          </button>
        </form>
        <p className="form-footer">
          Don't have an account?{" "}
          <Link to="/register" className="switch-link">
            Register here
          </Link>
        </p>
      </section>
    </div>
  );
};