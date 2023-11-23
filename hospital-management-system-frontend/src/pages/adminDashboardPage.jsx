import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./DashboardDoctor.css";
import Navigation from "../components/Navigation";
import DoctorRegistrationPage from "./doctorRegistrationPage";

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // States for submenu visibility
  const [doctorMenuOpen, setDoctorMenuOpen] = useState(false);
  const [patientMenuOpen, setPatientMenuOpen] = useState(false);
  const [medicineMenuOpen, setMedicineMenuOpen] = useState(false);

  // Function to toggle submenus
  const toggleSubMenu = (menu) => {
    if (menu === "doctor") {
      setDoctorMenuOpen(!doctorMenuOpen);
    } else if (menu === "patient") {
      setPatientMenuOpen(!patientMenuOpen);
    } else if (menu === "medicine") {
      setMedicineMenuOpen(!medicineMenuOpen);
    }
  };

  // Define a variable to track the active section based on the URL
  const activeSection = location.pathname.split("/")[1];

  return (
    <>
      <Navigation />
      <div className="dashboard">
        <div className="sidebar">
          <h2> Dashboard </h2>
          {/* Sidebar content */}
          <ul className="navi">
            <li onClick={() => toggleSubMenu("doctor")}>
              Doctor
              <ul className={`submenu ${doctorMenuOpen ? "open" : ""}`}>
                <li>
                  <Link to="/doctor/register">Doctor Registraion</Link>
                </li>
                <li>
                  <Link to="/doctor/all">Doctor List</Link>
                </li>
              </ul>
            </li>
            <li onClick={() => toggleSubMenu("patient")}>
              Patient
              <ul className={`submenu ${patientMenuOpen ? "open" : ""}`}>
                <li>
                  <Link to="/patient/add">Add Patient</Link>
                </li>
                <li>
                  <Link to="/patient/all">Patient List</Link>
                </li>
              </ul>
            </li>
            <li onClick={() => toggleSubMenu("medicine")}>
              Medicine
              <ul className={`submenu ${medicineMenuOpen ? "open" : ""}`}>
                <li>
                  <Link to="/medicine/add">Add Medicine</Link>
                </li>
                <li>
                  <Link to="/medicine/all">Medicine List</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="main-content">
          {activeSection === "register" && <DoctorRegistrationPage />}
          {/* ... (rest of the code) */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
