// All doctors List.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDepartmentHook from "../hooks/useDepartmentHook";
import { useNavigate } from "react-router-dom";
import useDoctorHook from "../hooks/useDoctorHook";

const AllDoctorList = () => {
  const navigate = useNavigate();
  const { doctors, handleSubmit, errors } = useDoctorHook();

  // const handleDepartmentClick = (departmentId) => {
  //   navigate(`/department/${departmentId}`);
  // };

  return (
    <div className="department-list-container">
      {doctors &&
        doctors.map((doctor) => {
          return (
            <div key={doctor.id} className="department-item">
              <div className="doctor-details">
                <img
                  src={doctor.imageUrl}
                  alt={`Dr. ${doctor.name}`}
                  className="doctor-image"
                />
                <h4>{doctor.specialId}</h4>
                <h3>{doctor.name}</h3>
                <p>Department:{doctor.designationDTO.name}</p>
                <p>Qualification: {doctor.qualification}</p>
                <p>Designation: {doctor.designationDTO.name}</p>
                <p>Specialties:</p>
                <ul>
                  {doctor.specialtyList.map((specialty, index) => (
                    <p key={index}>{specialty}</p>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllDoctorList;
