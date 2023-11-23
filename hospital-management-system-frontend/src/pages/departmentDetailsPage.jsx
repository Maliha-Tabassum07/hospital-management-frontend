import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "./DepartmentDetailsPage.css";

const DepartmentDetailsPage = () => {
  const navigate = useNavigate();
  const { departmentId } = useParams();
  const [departmentDetails, setDepartmentDetails] = useState();
  const [doctorDepartmentList, setDoctorDepartmentList] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/department/${departmentId}/get`)
      .then((resp) => {
        setDepartmentDetails(resp.data);
      })
      .catch((error) => setErrors(error));

    axiosInstance
      .get(`/doctor/${departmentId}/all`)
      .then((resp) => {
        setDoctorDepartmentList(resp.data);
      })
      .catch((error) => setErrors(error));
  }, [departmentId]);

  return (
    <div className="department-container">
      <div className="department-header">
        <h2>{departmentDetails?.name}</h2>
        <p>Floor Number: {departmentDetails?.floorNo}</p>
        <p> {departmentDetails?.description}</p>
      </div>
      <div>
        <h2>Department Doctors</h2>
      </div>
      <div className="doctor-list">
        {doctorDepartmentList.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img
              src={doctor.imageUrl}
              alt={`Dr. ${doctor.name}`}
              className="doctor-image"
            />
            <div className="doctor-details">
              <h4>{doctor.specialId}</h4>
              <h3>{doctor.name}</h3>
              <p> {doctor.qualification}</p>
              <p>Designation: {doctor.designationDTO.name}</p>
              {/* <p>Specialties:</p>
              <ul>
                {doctor.specialtyList.map((specialty, index) => (
                  <p key={index}>{specialty}</p>
                ))}
              </ul> */}
            </div>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </div>
  );
};

export default DepartmentDetailsPage;
