import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance, { patientAxiosInstance } from "../utils/axiosInstance";
import "./PatientProfilePage.css";

const DoctorProfilePage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axiosInstance.get(`/doctor/profile`).then((resp) => {
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
        <h2> Doctor Profile</h2>
        <h3>Doctor Id: {userDetails?.specialId}</h3>
        <p>Name: {userDetails?.name}</p>
        <p>Address: {userDetails?.address}</p>
        <p>Phone no: {userDetails?.phone}</p>
        <p>Email: {userDetails?.email}</p>
        <p>Room: {userDetails?.room}</p>
        <p>Qualification: {userDetails?.qualification}</p>
        <p>Designation: {userDetails?.designation.name}</p>
        <p>Department: {userDetails?.department.name}</p>
        {/* <p>Specialties:</p>
        <ul>
          {userDetails.specialty.map((special, index) => (
            <p key={index}>{special.name}</p>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default DoctorProfilePage;
