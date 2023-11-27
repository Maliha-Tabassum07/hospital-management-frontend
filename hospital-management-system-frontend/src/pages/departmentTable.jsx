import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AllDoctorList from "../components/allDoctorList";
import "./DepartmentDetailsPage.css";
import AllPatientList from "../components/allPatientList";
import DepartmentTable from "../components/departmentTable";
const DepartmentTablePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="doctor-list">
        <DepartmentTable />
      </div>
      <div>
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "teal",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          &larr;
        </button>
      </div>
    </>
  );
};

export default DepartmentTablePage;
