import React from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentDetailsPage.css";
import useDoctorHook from "../hooks/useDoctorHook";

const AllDoctorTable = () => {
  const navigate = useNavigate();
  const { doctors } = useDoctorHook();

  return (
    <div className="doctor-table-container">
      <div className="table-header">
        <h2 className="table-title">Doctor List</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>ID</th>
            <th>Name</th>
            <th>Qualification</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Specialties</th>
          </tr>
        </thead>
        <tbody>
          {doctors &&
            doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>
                  <img
                    src={doctor.imageUrl}
                    alt={`Dr. ${doctor.name}`}
                    className="doctor-image"
                  />
                </td>
                <td>{doctor.specialId}</td>
                <td>{doctor.name}</td>
                <td>{doctor.qualification}</td>
                <td>{doctor.departmentDTO.name}</td>
                <td>{doctor.designationDTO.name}</td>
                <td>
                  <ul>
                    {doctor.specialtyList.map((specialty, index) => (
                      <li key={index}>{specialty}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDoctorTable;
