import React from "react";
import { useNavigate } from "react-router-dom";
import useMedicineHook from "../hooks/useMedicineHook";
import "./DepartmentDetailsPage.css";

const MedicineTable = () => {
  const navigate = useNavigate();
  const { medicines } = useMedicineHook();
  const handleUpdateClick = () => {
    // Handle the update action
  };

  const handleDeleteClick = () => {
    // Handle the create action
  };

  return (
    <div className="medicine-table-container">
      <div className="table-header">
        <h2 className="table-title">Medicine List</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Generic Name</th>
            <th>Type</th>
            <th>Concentration</th>
            <th>Unit Price</th>
            <th>Expiration Date</th>
            <th>Side Effect</th>
            <th>Indications</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines &&
            medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.specialId}</td>
                <td>{medicine.medicineName}</td>
                <td>{medicine.genericName}</td>
                <td>{medicine.medicineType}</td>
                <td>{medicine.concentration}</td>
                <td>{medicine.unitPrice}</td>
                <td>{medicine.expirationDate}</td>
                <td>{medicine.sideEffect}</td>
                <td>
                  <ul>
                    {medicine.symptom.map((indi, index) => (
                      <li key={index}>{indi.name}</li>
                    ))}
                  </ul>
                </td>
                <button onClick={handleUpdateClick}>Update</button>
                <button onClick={handleDeleteClick}>Delete</button>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineTable;
