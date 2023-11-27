import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";
import axiosInstance, { pharmacyAxiosInstance } from "../utils/axiosInstance";

const MedicineFormPage = () => {
  const navigate = useNavigate();

  // State hooks for each form field
  const [medicineName, setMedicineName] = useState("");
  const [genericName, setGenericName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [concentration, setConcentration] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [departmentOptions, setDepartmentOptions] = useState([
    { id: 1, name: "Tablet" },
    { id: 2, name: "Syrup" },
    { id: 3, name: "Injection" },
  ]);
  const [medicineType, setMedicineType] = useState("");
  const [sideEffect, setSideEffect] = useState("");
  const [symptomOptions, setSymptomOptions] = useState([
    { id: 1, name: "Fever" },
    { id: 2, name: "Cold" },
    { id: 3, name: "Headache" },
    { id: 4, name: "Hypertension" },
    { id: 5, name: "Diabetes" },
    { id: 6, name: "Acidity" },
    { id: 7, name: "Allergy" },
    { id: 8, name: "Viral Infection" },
    { id: 9, name: "Skin Infection" },
    { id: 10, name: "Pain" },
    { id: 11, name: "Inflammation" },
    { id: 12, name: "Arthritis" },
    // Add other specialties as needed
  ]);
  const [selectedSymptomList, setSelectedSymptomList] = useState([]);
  const [isRegistrationDone, setIsRegistrationDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // Function to handle specialty toggling
  const handleSymptomToggle = (symptomId) => {
    setSelectedSymptomList((prevSelected) => {
      if (prevSelected.includes(symptomId)) {
        return prevSelected.filter((id) => id !== symptomId);
      } else {
        return [...prevSelected, symptomId];
      }
    });
  };

  // Form submit handler
  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      medicineName,
      genericName,
      medicineType,
      manufacturer,
      concentration,
      unitPrice,
      sideEffect,
      symptomList: selectedSymptomList,
    };

    setIsLoading(true);
    pharmacyAxiosInstance
      .post("/pharmacy/create", data)
      .then((resp) => {
        console.log("The Response", resp);
        setIsRegistrationDone(true);
        navigate("/medicine/all");
      })
      .catch((error) => {
        console.log("Error ", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div>
        <h1>Create Medicine</h1>
        <form className="registration-form" onSubmit={handleRegister}>
          <label htmlFor="medicineName">Medicine Name:</label>
          <input
            type="text"
            id="medicineName"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            required
          />

          <label htmlFor="genericName">Generic Name:</label>
          <input
            type="text"
            id="genericName"
            value={genericName}
            onChange={(e) => setGenericName(e.target.value)}
            required
          />

          <label htmlFor="manufacturer">Manufacturer:</label>
          <input
            type="text"
            id="manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />

          <label htmlFor="concentration">Concentration:</label>
          <input
            type="text"
            id="concentration"
            value={concentration}
            onChange={(e) => setConcentration(e.target.value)}
          />

          <label htmlFor="unitPrice">Unit Price:</label>
          <input
            type="text"
            id="unitPrice"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            required
          />

          <label htmlFor="sideEffect">SideEffect:</label>
          <input
            type="text"
            id="sideEffect"
            value={sideEffect}
            onChange={(e) => setSideEffect(e.target.value)}
            required
          />

          <label htmlFor="medicineType">Medicine Type:</label>
          <select
            id="medicineType"
            value={medicineType}
            onChange={(e) => setMedicineType(e.target.value)}
            required
          >
            <option value="">Select Type</option>
            {departmentOptions.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>

          <label htmlFor="symptom">Indications:</label>
          <div>
            {symptomOptions.map((option) => (
              <label key={option.id}>
                <input
                  type="checkbox"
                  value={option.id}
                  checked={selectedSymptomList.includes(option.id)}
                  onChange={() => handleSymptomToggle(option.id)}
                />
                {option.name}
              </label>
            ))}
          </div>

          <button type="submit">Create</button>
        </form>
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

export default MedicineFormPage;
