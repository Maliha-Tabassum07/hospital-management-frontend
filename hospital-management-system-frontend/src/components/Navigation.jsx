// Navigation.jsx
import React, { useState } from "react";
import "./Navigation.css";
import HomeDepartmentList from "./homeDepartmentList"; // Adjust the path based on your actual file structure

function Navigation() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (menuItem) => {
    setHoveredItem(menuItem);
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
              <a href="#">Book Appointment</a>
              <a href="#">Doctors</a>
              <a href="#">Patient Registration</a>
              <a href="#">Health Check</a>
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
          <a href="#">Pharmacy</a>
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
      <button className="login-button">Login</button>
    </nav>
  );
}

export default Navigation;
