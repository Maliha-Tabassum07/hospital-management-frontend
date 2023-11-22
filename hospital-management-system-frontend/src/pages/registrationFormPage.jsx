import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RegistrationForm.css"; // Make sure to have this CSS file for styling
import { patientAxiosInstance } from "../utils/axiosInstance";

const RegistrationFormPage = () => {
  const navigate = useNavigate();

  // State hooks for each form field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [occupation, setOccupation] = useState("");
  const [nationality, setNationality] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactNo, setEmergencyContactNo] = useState("");
  const [isRegistrationDone, setIsRegistrationDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // Form submit handler
  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
      address: address,
      phone: phone,
      gender: gender,
      fatherName: fatherName,
      motherName: motherName,
      maritalStatus: maritalStatus,
      occupation: occupation,
      nationality: nationality,
      emergencyContactName: emergencyContactName,
      emergencyContactNo: emergencyContactNo,
    };
    console.log("Data before API call:", data);
    setIsLoading(true);
    patientAxiosInstance
      .post("/patient/register", data)
      .then((resp) => {
        console.log("The Response", resp);
        setIsRegistrationDone(true);
        navigate("/patient/login");
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
      <form className="registration-form" onSubmit={handleRegister}>
        {/* Input fields for each form field */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="maritalStatus">Marital Status:</label>
        <select
          id="maritalStatus"
          value={maritalStatus}
          onChange={(e) => setMaritalStatus(e.target.value)}
          required
        >
          <option value="">Select Marital Status</option>
          <option value="Married">Married</option>
          <option value="Unmarried">Unmarried</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="fatherName">Father Name:</label>
        <input
          type="text"
          id="fatherName"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          required
        />

        <label htmlFor="motherName">Mother Name:</label>
        <input
          type="text"
          id="motherName"
          value={motherName}
          onChange={(e) => setMotherName(e.target.value)}
          required
        />

        {/* ... More input fields for the other data ... */}

        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />

        <label htmlFor="nationality">Nationality:</label>
        <input
          type="text"
          id="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
        />

        <label htmlFor="emergencyContactName">Emergency Contact Name:</label>
        <input
          type="text"
          id="emergencyContactName"
          value={emergencyContactName}
          onChange={(e) => setEmergencyContactName(e.target.value)}
        />

        <label htmlFor="emergencyContactNo">Emergency Contact Number:</label>
        <input
          type="tel"
          id="emergencyContactNo"
          value={emergencyContactNo}
          onChange={(e) => setEmergencyContactNo(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
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

export default RegistrationFormPage;
