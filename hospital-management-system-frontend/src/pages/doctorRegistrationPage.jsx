import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";
import axiosInstance, { patientAxiosInstance } from "../utils/axiosInstance";

const DoctorRegistrationPage = () => {
  const navigate = useNavigate();

  // State hooks for each form field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [qualification, setQualification] = useState("");
  const [departmentOptions, setDepartmentOptions] = useState([
    { id: 1, name: "Cardiology" },
    { id: 2, name: "Covid" },
    { id: 3, name: "Dental" },
    { id: 4, name: "Dermatology" },
    { id: 5, name: "Diabetes" },
    { id: 6, name: "Endocrinology" },
    { id: 7, name: "Medicine" },
    { id: 8, name: "Ent & Head Neck" },
    { id: 9, name: "Gartro Liver" },
    { id: 10, name: "Surgery" },
    { id: 11, name: "Neprology" },
    { id: 12, name: "Neurology" },
    { id: 13, name: "Gynaecology" },
    { id: 14, name: "Oncology" },
    { id: 15, name: "Paediatrics" },
    { id: 16, name: "Psychiatry" },
    { id: 17, name: "Respiratory Medicine" },
    { id: 18, name: "Opthalmology" },
    { id: 19, name: "Orthopedics" },
    { id: 20, name: "Urology" },
    // Add other departments as needed
  ]);
  const [designationOptions, setDesignationOptions] = useState([
    { id: 1, name: "Head of the department" },
    { id: 2, name: "Professor" },
    { id: 3, name: "Assistant Professor" },
    { id: 4, name: "Sr. Consultant" },
    { id: 5, name: "Consultant" },
    // Add other designations as needed
  ]);
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [room, setRoom] = useState("");
  const [phone, setPhone] = useState("");
  const [specialtyOptions, setSpecialtyOptions] = useState([
    { id: 1, name: "Cardiology" },
    { id: 2, name: "Covid" },
    { id: 3, name: "Dental" },
    { id: 4, name: "Dermatology" },
    { id: 5, name: "Diabetes" },
    { id: 6, name: "Endocrinology" },
    { id: 7, name: "Medicine" },
    { id: 8, name: "Ent & Head Neck" },
    { id: 9, name: "Gartro Liver" },
    { id: 10, name: "Surgery" },
    { id: 11, name: "Neprology" },
    { id: 12, name: "Neurology" },
    { id: 13, name: "Gynaecology" },
    { id: 14, name: "Oncology" },
    { id: 15, name: "Paediatrics" },
    { id: 16, name: "Psychiatry" },
    { id: 17, name: "Respiratory Medicine" },
    { id: 18, name: "Opthalmology" },
    { id: 19, name: "Orthopedics" },
    { id: 20, name: "Urology" },
    // Add other specialties as needed
  ]);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [isRegistrationDone, setIsRegistrationDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // Function to handle specialty toggling
  const handleSpecialtyToggle = (specialtyId) => {
    setSelectedSpecialties((prevSelected) => {
      if (prevSelected.includes(specialtyId)) {
        return prevSelected.filter((id) => id !== specialtyId);
      } else {
        return [...prevSelected, specialtyId];
      }
    });
  };

  // Form submit handler
  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      address,
      phone,
      imageUrl,
      qualification,
      department,
      designation,
      room,
      specialty: selectedSpecialties,
    };

    setIsLoading(true);
    axiosInstance
      .post("/doctor/register", data)
      .then((resp) => {
        console.log("The Response", resp);
        setIsRegistrationDone(true);
        navigate("/admin/dashboard");
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
        <h1>Doctor Registration</h1>
        <form className="registration-form" onSubmit={handleRegister}>
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

          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />

          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            id="qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
          />

          <label htmlFor="department">Department:</label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            {departmentOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>

          <label htmlFor="designation">Designation:</label>
          <select
            id="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          >
            <option value="">Select Designation</option>
            {designationOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>

          <label htmlFor="room">Room:</label>
          <input
            type="text"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            required
          />

          <label htmlFor="specialty">Specialty:</label>
          <div>
            {specialtyOptions.map((option) => (
              <label key={option.id}>
                <input
                  type="checkbox"
                  value={option.id}
                  checked={selectedSpecialties.includes(option.id)}
                  onChange={() => handleSpecialtyToggle(option.id)}
                />
                {option.name}
              </label>
            ))}
          </div>

          <button type="submit">Register</button>
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

export default DoctorRegistrationPage;
