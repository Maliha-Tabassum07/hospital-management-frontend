import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientAxiosInstance } from "../utils/axiosInstance";
import "./PatientProfilePage.css";

const PatientCount = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    patientAxiosInstance.get(`/patient/count`).then((resp) => {
      const data = resp.data;
      setUserDetails(data);
      console.log("data", data);
    });
  }, []);

  const handleUpdateClick = () => {
    setShowForm(true);
  };

  return (
    <div className="container profile-container">
      <div className="details">
        <h3>Patient Count:</h3>
        <h3>{userDetails}</h3>
      </div>
    </div>
  );
};

export default PatientCount;
