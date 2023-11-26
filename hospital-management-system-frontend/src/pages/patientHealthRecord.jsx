import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientAxiosInstance } from "../utils/axiosInstance";
import "./PatientProfilePage.css";

const PatientHealthRecord = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    patientAxiosInstance.get(`/patient/health-record`).then((resp) => {
      const data = resp.data;
      setUserDetails(data);
      console.log("health", data);
    });
  }, []);

  const handleUpdateClick = () => {
    setShowForm(true);
  };

  return (
    <div className="container profile-container">
      <div className="details">
        <h2>Patient Health Profile</h2>
        <h3>Patient Id: {userDetails?.specialId}</h3>
        <p>Blood Group: {userDetails?.bloodGroup}</p>
        <p>Height: {userDetails?.heightCm}</p>
        <p>Weight: {userDetails?.weightKg}</p>
        <p>BMI Index: {userDetails?.bmi}</p>
        <p>Average Sleep: {userDetails?.sleepHour}</p>
        <p>Allergy: {userDetails?.allergy ? "YES" : "NO"}</p>
        <p>Blood sugar level: {userDetails?.bloodSugarLevel}</p>
        <p>Blood Pressure: {userDetails?.bloodPressure}</p>
        <p>Smoker: {userDetails?.smoke ? "YES" : "NO"}</p>
        <p>Last Updated: {userDetails?.date}</p>
      </div>
    </div>
  );
};

export default PatientHealthRecord;
