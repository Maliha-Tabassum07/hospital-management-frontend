import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientAxiosInstance } from "../utils/axiosInstance";
import "./PatientProfilePage.css";

const PatientRecommendation = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    patientAxiosInstance.get(`/patient/recommendation`).then((resp) => {
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
        <h2> Personalised Recommendation</h2>
        <h2>Suggested Doctors: {userDetails?.doctorName}</h2>
        <h2>Suggested Medicines: {userDetails?.medicine}</h2>
        <p>TreatmentPlan: {userDetails?.treatmentPlan}</p>
        <p>Recommendations: {userDetails?.recommendation}</p>
      </div>
    </div>
  );
};

export default PatientRecommendation;
