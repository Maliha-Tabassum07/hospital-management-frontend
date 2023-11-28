// All doctors List.jsx
import React from "react";
import { Link } from "react-router-dom";
import useDepartmentHook from "../hooks/useDepartmentHook";
import { useNavigate } from "react-router-dom";
import useDoctorHook from "../hooks/useDoctorHook";
import "./DoctorDetailsPage.css";
const DoctorAppointmentList = () => {
  const navigate = useNavigate();
  const { doctors, handleSubmit, errors } = useDoctorHook();

  return (
    <>
      <div>
        <div>
          <h2 style={{ textAlign: "center" }}>Doctor Appointment</h2>
        </div>
        <div className="doctor-list">
          {doctors &&
            doctors.map((doctor) => {
              return (
                <div key={doctor.id} className="doctor-list">
                  <div className="doctor-card">
                    <img
                      src={doctor.imageUrl}
                      alt={`Dr. ${doctor.name}`}
                      className="doctor-image"
                    />
                    <h4>{doctor.specialId}</h4>
                    <h3>{doctor.name}</h3>
                    <p> {doctor.qualification}</p>
                    <p>Department:{doctor.departmentDTO.name}</p>
                    <p>Designation: {doctor.designationDTO.name}</p>
                    <p>Specialties:</p>
                    <ul>
                      {doctor.specialtyList.map((specialty, index) => (
                        <p key={index}>{specialty}</p>
                      ))}
                    </ul>
                    <div>
                      <button
                        className="back-button"
                        onClick={() => navigate(`/doctor/${doctor.id}`)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
      </div>
    </>
  );
};

export default DoctorAppointmentList;
