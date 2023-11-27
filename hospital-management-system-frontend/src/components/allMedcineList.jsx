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
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>All Medicine</h2>
      </div>
      <div className="doctor-list">
        {medicines &&
          medicines.map((medicine) => {
            return (
              <div key={medicine.id} className="doctor-list">
                <div className="doctor-card">
                  <h4>{medicine.specialId}</h4>
                  <h3>Name:{medicine.medicineName}</h3>
                  <p>Generic Name: {medicine.genericName}</p>
                  <p>Medicine Type:{medicine.medicineType}</p>
                  <p>Concentration:{medicine.concentration}</p>
                  <p>Unit Price:{medicine.unitPrice}</p>
                  <p>Expiration date:{medicine.expirationDate}</p>
                  <p>Side Effect:{medicine.sideEffect}</p>
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
    </>
  );
};

export default AllMedicineList;
