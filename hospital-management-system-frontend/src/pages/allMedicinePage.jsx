import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AllMedicineList from "../components/allMedcineList";
const AllMedicinePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <AllMedicineList />
      </div>
      <div>
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "teal",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          &larr;
        </button>
      </div>
    </>
  );
};

export default AllMedicinePage;
