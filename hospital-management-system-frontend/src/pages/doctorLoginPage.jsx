import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "./LoginPage.css"; // Make sure this path is correct

const DoctorLoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/doctor/login", {
        email,
        password,
      });
      console.log("Login Response", response);
      localStorage.setItem("token", response.data.Authorization);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("userId", response.data.userId);
      navigate("/doctor/landing"); // Redirect to the dashboard after successful login.
    } catch (error) {
      console.error("Login Error", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className="back-button"
        onClick={() => navigate("/patient/login")}
        style={{
          backgroundColor: "teal",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Patient Login
      </button>
      <div className="login-container">
        <div></div>
        <h1>Administrative Login</h1>
        {isLoading && <h2 className="loading">Loading...</h2>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            Login
          </button>
        </form>
      </div>
      <div>
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "teal",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          &larr;
        </button>
      </div>
    </>
  );
};

export default DoctorLoginPage;
