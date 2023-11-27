import React from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentDetailsPage.css";
import usePatientHook from "../hooks/usePatientHook";

const AllPatientList = () => {
  const navigate = useNavigate();
  const { patients } = usePatientHook();

  return (
    <div className="patient-table-container">
      <div className="table-header">
        <h2 className="table-title">Patient List</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Marital Status</th>
            <th>Occupation</th>
            <th>Nationality</th>
            <th>Emergency Contact Name</th>
            <th>Emergency Contact No</th>
          </tr>
        </thead>
        <tbody>
          {patients &&
            patients.map((patient) => (
              <tr key={patient.specialId}>
                <td>
                  <img
                    src={patient.imageUrl}
                    alt={`${patient.name}`}
                    className="patient-image"
                  />
                </td>
                <td>{patient.specialId}</td>
                <td>{patient.name}</td>
                <td>{patient.address}</td>
                <td>{patient.phone}</td>
                <td>{patient.gender}</td>
                <td>{patient.fatherName}</td>
                <td>{patient.motherName}</td>
                <td>{patient.maritalStatus}</td>
                <td>{patient.occupation}</td>
                <td>{patient.nationality}</td>
                <td>{patient.emergencyContactName}</td>
                <td>{patient.emergencyContactNo}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPatientList;
