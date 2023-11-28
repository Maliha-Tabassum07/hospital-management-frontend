import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DashboardDoctor.css";
import Navigation from "../components/Navigation";
import DoctorRegistrationPage from "./doctorRegistrationPage";
import AllPatientTable from "./allPatientTablePage";
import DepartmentTable from "./departmentTable";
import AllScheduleList from "../components/allScheduleList";
import AllSlotList from "../components/allSlotList";
import AllDoctorTable from "../components/allDoctorTable";
import AllHealthRecord from "../components/allHealthRecordList";
import MedicineTable from "../components/medicineTable";
import MedicineFormPage from "./medicineFormPage";
import AllCommunityList from "../components/allCommunityList";
import CommunityFormPage from "./createCommunity";
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
                  <a onClick={() => handleSectionChange("department")}>
                    Department List
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSectionChange("schedule")}>
                    Schedule List
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSectionChange("slot")}>Slot List</a>
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
                  <a onClick={() => handleSectionChange("allPatient")}>
                    Patient Data
                  </a>
                </li>
                <li>
                  {" "}
                  <a onClick={() => handleSectionChange("healthData")}>
                    Health Data
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => handleDropdown("medicine")}>
                Pharmacy
              </button>
              <ul
                className={`submenu ${
                  openDropdown === "medicine" ? "open" : ""
                }`}
              >
                <li>
                  <a onClick={() => handleSectionChange("allMedicine")}>
                    Medicine List
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSectionChange("createMedicine")}>
                    Create Medicine
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => handleDropdown("community")}>
                Community
              </button>
              <ul
                className={`submenu ${
                  openDropdown === "community" ? "open" : ""
                }`}
              >
                <li>
                  <a onClick={() => handleSectionChange("communityList")}>
                    Community List
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSectionChange("createCommunity")}>
                    Create Community
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="main-content">
          {/* <h3>
            <PatientCount />
          </h3> */}{" "}
          {selectedSection === "doctorRegistration" && (
            <DoctorRegistrationPage />
          )}
          {selectedSection === "allDoctor" && <AllDoctorTable />}
          {selectedSection === "allPatient" && <AllPatientTable />}
          {selectedSection === "department" && <DepartmentTable />}
          {selectedSection === "schedule" && <AllScheduleList />}
          {selectedSection === "slot" && <AllSlotList />}
          {selectedSection === "healthData" && <AllHealthRecord />}
          {selectedSection === "allMedicine" && <MedicineTable />}
          {selectedSection === "createMedicine" && <MedicineFormPage />}
          {selectedSection === "communityList" && <AllCommunityList />}
          {selectedSection === "createCommunity" && <CommunityFormPage />}
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
