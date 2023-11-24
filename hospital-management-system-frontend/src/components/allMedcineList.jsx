// All doctors List.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useMedicineHook from "../hooks/useMedicineHook";
import "./DepartmentDetailsPage.css";
const AllMedicineList = () => {
  const navigate = useNavigate();
  const { medicines, handleSubmit, errors } = useMedicineHook();

  return (
    <div className="doctor-list">
      {medicines &&
        medicines.map((medicine) => {
          return (
            <div key={medicine.id} className="doctor-list">
              <div className="doctor-card">
                <h4>{medicine.specialId}</h4>
                <h3>{medicine.medicineName}</h3>
                <p>{medicine.genericName}</p>
                {/* <p>Indications: {medicine.symptom.name}</p> */}
                <p>Indications:</p>

                <ul>
                  {medicine.symptom.map((indi, index) => (
                    <p key={index}>{indi.name}</p>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllMedicineList;
