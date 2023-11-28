import React from "react";
import Navigation from "../components/Navigation";
import MainContent from "../components/MainContent";
import { useNavigate } from "react-router-dom";

// New component for buttons
const ActionButtons = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}
    >
      <button
        onClick={() => navigate("/patient/recommendation")}
        style={{
          margin: "0 10px",
          padding: "10px 20px",
          color: "teal",
          fontSize: "16px",
          border: "1px solid teal",
          borderRadius: "5px",
        }}
      >
        Get Recommendation
      </button>
      <button
        onClick={() => navigate("/all/community")}
        style={{
          margin: "0 10px",
          padding: "10px 20px",
          color: "teal",
          fontSize: "16px",
          border: "1px solid teal",
          borderRadius: "5px",
        }}
      >
        All Communities
      </button>
      <button
        style={{
          margin: "0 10px",
          padding: "10px 20px",
          color: "teal",
          fontSize: "16px",
          border: "1px solid teal",
          borderRadius: "5px",
        }}
      >
        Your Communities
      </button>
    </div>
  );
};

const PatientLandingPage = () => {
  return (
    <>
      <ActionButtons />
      <MainContent />
    </>
  );
};

export default PatientLandingPage;
