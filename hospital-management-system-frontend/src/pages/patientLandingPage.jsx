import React from "react";
import Navigation from "../components/Navigation";
import MainContent from "../components/MainContent";

// New component for buttons
const ActionButtons = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}
    >
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
        Get Recommendation
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
      <Navigation />
      <ActionButtons />
      <MainContent />
    </>
  );
};

export default PatientLandingPage;
