// Navigation.jsx
import React from "react";
import "./Navigation.css"; // Make sure to create a corresponding CSS file

function Navigation() {
  return (
    <ul className="nav">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Career</a>
      </li>
      {/* More navigation items */}
    </ul>
  );
}

export default Navigation;
