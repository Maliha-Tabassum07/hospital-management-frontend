import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AllDoctorList from "../components/allDoctorList";
import "./DepartmentDetailsPage.css";
import AllPatientList from "../components/allPatientList";
const AllPatientTable = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="doctor-list">
        <AllPatientList />
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

export default AllPatientTable;
