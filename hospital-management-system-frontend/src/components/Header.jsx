// Header.jsx
import React from "react";
import "./Header.css"; // Make sure to create a corresponding CSS file
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>HMS</h1>
      <p>
        Hotline: 10666 | Emergency: +880 1914 001234 | Appointment Hotline: 02
        22 22 62 466 |{" "}
        <Link to={`/telemedicine`} className="blink">
          Telemedicine
        </Link>
      </p>
    </header>
  );
}

export default Header;
