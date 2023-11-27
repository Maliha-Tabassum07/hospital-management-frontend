import React from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentDetailsPage.css";
import usePatientHook from "../hooks/usePatientHook";
import useHealthRecordHook from "../hooks/useHealthRecordHook";

const AllHealthRecord = () => {
  const navigate = useNavigate();
  const { patients } = useHealthRecordHook();

  return (
    <div className="patient-table-container">
      <div className="table-header">
        <h2 className="table-title">Patient Health Record</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Height_Cm</th>
            <th>Weight_Kg</th>
            <th>Blood_Sugar_Level</th>
            <th>Blood_Pressure</th>
            <th>Blood_Group</th>
            <th>Heart_Rate</th>
            <th>BMI</th>
            <th>Date_Updated</th>
            <th>Average_Sleep</th>
            <th>Smoke</th>
            <th>Allergy</th>
          </tr>
        </thead>
        <tbody>
          {patients &&
            patients.map((patient) => (
              <tr key={patient.specialId}>
                <td>{patient.specialId}</td>
                <td>{patient.heightCm}</td>
                <td>{patient.weightKg}</td>
                <td>{patient.bloodSugarLevel}</td>
                <td>{patient.bloodPressure}</td>
                <td>{patient.bloodGroup}</td>
                <td>{patient.heartRate}</td>
                <td>{patient.bmi}</td>
                <td>{patient.date}</td>
                <td>{patient.sleepHour}</td>
                <td>{patient.smoke ? "Yes" : "No"}</td>
                <td>{patient.allergy ? "Yes" : "No"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllHealthRecord;
