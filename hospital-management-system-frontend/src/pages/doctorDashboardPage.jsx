import React, { useState } from "react";
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
import PatientCount from "./patientCount";
const DoctorDashboard = () => {
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
                    Doctor Profile
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSectionChange("allDoctor")}>
                    Update Profile
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => handleDropdown("patient")}>
                Appointment
              </button>
              <ul
                className={`submenu ${
                  openDropdown === "patient" ? "open" : ""
                }`}
              >
                <li>
                  {" "}
                  <a onClick={() => handleSectionChange("allPatient")}>
                    Appointment Schedule
                  </a>
                </li>
                <li>
                  {" "}
                  <a onClick={() => handleSectionChange("healthData")}>
                    Appointment Slots
                  </a>
                </li>
                <li>
                  {" "}
                  <a onClick={() => handleSectionChange("healthData")}>
                    Booked Slots
                  </a>
                </li>
                <li>
                  {" "}
                  <a onClick={() => handleSectionChange("healthData")}>
                    Create Schedule
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => handleDropdown("medicine")}>
                Patient
              </button>
              <ul
                className={`submenu ${
                  openDropdown === "medicine" ? "open" : ""
                }`}
              >
                <li>
                  <a onClick={() => handleSectionChange("allMedicine")}>
                    Search Patient
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

export default DoctorDashboard;
