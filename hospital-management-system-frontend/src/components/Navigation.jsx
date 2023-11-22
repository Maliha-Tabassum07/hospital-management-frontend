// Navigation.jsx
import React, { useState } from "react";
import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import HomeDepartmentList from "./homeDepartmentList"; // Adjust the path based on your actual file structure

function Navigation() {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log("Pore role: " + role);
  const userId = localStorage.getItem("userId");

  const handleMouseEnter = (menuItem) => {
    setHoveredItem(menuItem);
  };
  const handleLogin = () => {
    navigate("/patient/login");
  };
  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav className="navbar">
      <ul className="nav">
        <li
          onMouseEnter={() => handleMouseEnter("patient")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Patient Info</a>
          {hoveredItem === "patient" && (
            <div className="sub-menu">
              <Link to={`/doctor/all`}>Doctors</Link>
              <Link to={`/patient/registration`}>Patient Registration</Link>
              {/* <a href="#">Health Check</a> */}
              {/* Add more patient-related links as needed */}
            </div>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("departments")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Departments</a>
          {hoveredItem === "departments" && (
            <div className="sub-menu">
              <HomeDepartmentList />{" "}
              {/* Render the department list component */}
            </div>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("doctors")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to={`/medicine/all`}>Pharmacy</Link>
          {/* Add more doctor-related links as needed */}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("doctors")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Help Desk</a>
          {/* Add more doctor-related links as needed */}
        </li>
        {/* Add more navigation items as needed */}
      </ul>
      {!token && (
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      )}
      {token && (
        <button className="login-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navigation;
