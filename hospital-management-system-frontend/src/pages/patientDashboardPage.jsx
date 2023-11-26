import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DashboardDoctor.css";
import Navigation from "../components/Navigation";
import DoctorRegistrationPage from "./doctorRegistrationPage";
import AllDoctorPage from "./allDoctorsPage";
import PatientProfilePage from "./patientProfile";
import PatientHealthRecord from "./patientHealthRecord";
const PatientDashboardPage = () => {
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
              <button onClick={() => handleDropdown("patient")}>Profile</button>
              <ul
                className={`submenu ${
                  openDropdown === "patient" ? "open" : ""
                }`}
              >
                <li>
                  <a onClick={() => handleSectionChange("patientProfile")}>
                    Your Profile
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSectionChange("patientHealth")}>
                    Health Information
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => handleDropdown("appointment")}>
                Appointments
              </button>
              <ul
                className={`submenu ${
                  openDropdown === "appointment" ? "open" : ""
                }`}
              >
                <li>
                  {" "}
                  <a onClick={() => handleSectionChange("allDoctor")}>
                    Your Appointments
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="main-content">
          {" "}
          {selectedSection === "patientProfile" && <PatientProfilePage />}
          {selectedSection === "patientHealth" && <PatientHealthRecord />}
        </div>
      </div>
    </>
  );
};

export default PatientDashboardPage;
