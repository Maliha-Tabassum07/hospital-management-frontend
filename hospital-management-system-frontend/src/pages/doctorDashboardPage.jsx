import React, { useEffect, useState } from "react";
import "./DashboardDoctor.css";
import Navigation from "../components/Navigation";
import DoctorRegistrationPage from "./doctorRegistrationPage";
import AllPatientTable from "./allPatientTablePage";
import DepartmentTable from "./departmentTable";
import MedicineTable from "../components/medicineTable";
import MedicineFormPage from "./medicineFormPage";
import AllCommunityList from "../components/allCommunityList";
import CommunityFormPage from "./createCommunity";
import axiosInstance from "../utils/axiosInstance";
import DoctorProfilePage from "./doctorProfile";
import CreateAppointment from "./createAppointment";
import DoctorAppointmentTable from "./doctorAppointmentTable";
import DoctorAppointmentSchedule from "./doctorSchedulePage";
const DoctorDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("details");
  const [openDropdown, setOpenDropdown] = useState("");
  const [doctorDetails, setDoctorDetails] = useState();
  const doctorId = localStorage.getItem("userId");
  useEffect(() => {
    axiosInstance
      .get(`/doctor/${doctorId}/get`)
      .then((resp) => setDoctorDetails(resp.data))
      .catch((error) => setErrors(error));
  }, []);

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
          <div className="doctor-image-container">
            <img
              src={doctorDetails?.imageUrl}
              alt={`Dr. ${doctorDetails?.name}`}
              className="doctor-image"
            />
          </div>
          <p>{doctorDetails?.name}</p>
          <ul className="navi">
            <li>
              <button onClick={() => handleDropdown("doctor")}>Doctor</button>
              <ul
                className={`submenu ${openDropdown === "doctor" ? "open" : ""}`}
              >
                <li>
                  <a onClick={() => handleSectionChange("doctorProile")}>
                    Doctor Profile
                  </a>
                </li>
                <li>
                  <a onClick={() => handleSectionChange("updateProfile")}>
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
                  <a onClick={() => handleSectionChange("schedule")}>
                    Appointment Schedule
                  </a>
                </li>
                <li>
                  {" "}
                  <a onClick={() => handleSectionChange("slot")}>
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
                  <a onClick={() => handleSectionChange("createSchedule")}>
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
                  <a onClick={() => handleSectionChange("patient")}>
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
          {selectedSection === "doctorProile" && <DoctorProfilePage />}
          {selectedSection === "allPatient" && <AllPatientTable />}
          {selectedSection === "department" && <DepartmentTable />}
          {selectedSection === "schedule" && <DoctorAppointmentSchedule />}
          {selectedSection === "slot" && <DoctorAppointmentTable />}
          {selectedSection === "createSchedule" && <CreateAppointment />}
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
