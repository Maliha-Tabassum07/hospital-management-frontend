import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance, { patientAxiosInstance } from "../utils/axiosInstance";
import "./LoginPage.css"; // Make sure this path is correct

const PatientLoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await patientAxiosInstance.post("/patient/login", {
        email,
        password,
      });
      console.log("Login Response", response);
      localStorage.setItem("token", response.data.Authorization);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("userId", response.data.id);
      navigate("/patient/landing"); // Redirect to the dashboard after successful login.
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
        onClick={() => navigate("/doctor/login")}
        style={{
          backgroundColor: "teal",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Admininstrative Login
      </button>
      <div className="login-container">
        <div></div>
        <h1>Patient Login</h1>
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

export default PatientLoginPage;
