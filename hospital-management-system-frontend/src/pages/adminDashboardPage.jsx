import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./DashboardDoctor.css";
import Navigation from "../components/Navigation";
import DoctorRegistrationPage from "./doctorRegistrationPage";
// import AllPatientPage from "../pages/AllPatientPage";
// import AllDoctorPage from "../pages/AllDoctorPage";

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Dummy data for the noticeboard
  const notices = [
    {
      id: 1,
      title: "Testing purpose",
      description: "This is a test notification",
      startDate: "2023-07-15",
      endDate: "2023-07-15",
      assignedBy: "Klinik Unisyah Cibogo",
    },
  ];

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
            <div>
              {" "}
              <li>
                <Link
                  to={`/register/doctor`}
                  className={`nav-link ${
                    activeSection === "register" && "active"
                  }`}
                >
                  Doctor registration
                </Link>
              </li>
            </div>
            <div>
              {" "}
              <li>
                <Link
                  to={`/patient/all`}
                  className={`nav-link ${
                    activeSection === "patient" && "active"
                  }`}
                >
                  All patient
                </Link>
              </li>
            </div>
            <div>
              {" "}
              <li>
                <Link
                  to={`/doctor/all`}
                  className={`nav-link ${
                    activeSection === "doctor" && "active"
                  }`}
                >
                  All doctor
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="main-content">
          {activeSection === "register" && <DoctorRegistrationPage />}
          {/* {activeSection === "patient" && <AllPatientPage />}
          {activeSection === "doctor" && <AllDoctorPage />} */}

          {/* Noticeboard section */}
          <div className="noticeboard">
            <h2>Noticeboard</h2>
            <table>{/* ... (rest of the code) */}</table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
