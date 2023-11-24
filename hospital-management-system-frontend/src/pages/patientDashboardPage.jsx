import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DashboardDoctor.css";
import Navigation from "../components/Navigation";
import DoctorRegistrationPage from "./doctorRegistrationPage";
import AllDoctorPage from "./allDoctorsPage";
const AdminDashboardPage = () => {
  const [selectedSection, setSelectedSection] = useState("details");
  const [openDropdown, setOpenDropdown] = useState("");

  const handleDropdown = (name) => {
    // If the same dropdown is clicked again, close it
    if (openDropdown === name) {
      setOpenDropdown("");
    } else {
      setOpenDropdown(name);
    }
  };
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <Navigation />
      <div className="dashboard">
        <div className="sidebar">
          <h2>Dashboard</h2>
          <ul className="navi">
            <li>
              <button onClick={() => handleDropdown("doctor")}>Doctor</button>
              <ul
                className={`submenu ${openDropdown === "doctor" ? "open" : ""}`}
              >
                <li>
                  <a onClick={() => handleSectionChange("doctorRegistration")}>
                    Register Doctor
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSectionChange("allDoctor")}>
                    Doctor List
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSectionChange("allDoctor")}>
                    Department List
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => handleDropdown("patient")}>Patient</button>
              <ul
                className={`submenu ${
                  openDropdown === "patient" ? "open" : ""
                }`}
              >
                <li>
                  {" "}
                  <a onClick={() => handleSectionChange("allDoctor")}>
                    Patient Data
                  </a>
                </li>
                <li>
                  {" "}
                  <a onClick={() => handleSectionChange("allDoctor")}>
                    Health Data
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => handleDropdown("medicine")}>
                Medicine
              </button>
              <ul
                className={`submenu ${
                  openDropdown === "medicine" ? "open" : ""
                }`}
              >
                <li>
                  <a onClick={() => handleSectionChange("allDoctor")}>
                    Medicine List
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSectionChange("allDoctor")}>
                    Create Medicine
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="main-content">
          {" "}
          {selectedSection === "doctorRegistration" && (
            <DoctorRegistrationPage />
          )}
          {selectedSection === "allDoctor" && <AllDoctorPage />}
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
