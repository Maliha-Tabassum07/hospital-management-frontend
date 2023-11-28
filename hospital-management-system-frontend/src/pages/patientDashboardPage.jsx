import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DashboardDoctor.css";
import PatientProfilePage from "./patientProfile";
import PatientHealthRecord from "./patientHealthRecord";
import PatientBookedSlots from "./patientBookedSlots";
import CreateHealthDataForm from "./createHealthData";
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
      <div className="dashboard">
        <div className="sidebar">
          <h2>Dashboard</h2>
          <ul className="navi">
            <li>
              <Link to="/patient/landing" className="home-icon">
                <i className="fas fa-home"></i> {/* Home icon */}
              </Link>
            </li>
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
                <li>
                  <a onClick={() => handleSectionChange("createHealthData")}>
                    Create Health
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSectionChange("patientHealth")}>
                    Update Health
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
                  <a onClick={() => handleSectionChange("allBooked")}>
                    Booked Appointments
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
          {selectedSection === "allBooked" && <PatientBookedSlots />}
          {selectedSection === "createHealthData" && <CreateHealthDataForm />}
        </div>
      </div>
    </>
  );
};

export default PatientDashboardPage;
