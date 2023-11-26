import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientAxiosInstance } from "../utils/axiosInstance";
import "./PatientProfilePage.css";

const PatientProfilePage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    patientAxiosInstance.get(`/patient/patient-info`).then((resp) => {
      const data = resp.data;
      setUserDetails(data);
    });
  }, []);

  const handleUpdateClick = () => {
    setShowForm(true);
  };

  return (
    <div className="container profile-container">
      <div className="details">
        <h2> Patient Profile</h2>
        <h3>Patient Id: {userDetails?.specialId}</h3>
        <p>Name: {userDetails?.name}</p>
        <p>Address: {userDetails?.address}</p>
        <p>Phone no: {userDetails?.phone}</p>
        <p>Gender: {userDetails?.gender}</p>
        <p>Nationality: {userDetails?.nationality}</p>
        <p>Occupation: {userDetails?.occupation}</p>
        <p>Father name: {userDetails?.fatherName}</p>
        <p>Mother name: {userDetails?.motherName}</p>
        <p>Emergency Contact Name: {userDetails?.emergencyContactName}</p>
        <p>Emergency Contact No: {userDetails?.emergencyContactNo}</p>
      </div>
    </div>
  );
};

export default PatientProfilePage;
