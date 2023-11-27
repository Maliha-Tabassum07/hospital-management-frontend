import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";
import axiosInstance, {
  communityAxiosInstance,
  pharmacyAxiosInstance,
} from "../utils/axiosInstance";

const CommunityFormPage = () => {
  const navigate = useNavigate();

  // State hooks for each form field
  const [name, setName] = useState("");
  const [rule, setRule] = useState("");
  const [isRegistrationDone, setIsRegistrationDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      name,
      rule,
    };

    setIsLoading(true);
    communityAxiosInstance
      .post("/community/create", data)
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
        <h1>Create Community</h1>
        <form className="registration-form" onSubmit={handleRegister}>
          <label htmlFor="name">Community Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="genericName">Community Rules:</label>
          <input
            type="text"
            id="rule"
            value={rule}
            onChange={(e) => setRule(e.target.value)}
            required
          />

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

export default CommunityFormPage;
