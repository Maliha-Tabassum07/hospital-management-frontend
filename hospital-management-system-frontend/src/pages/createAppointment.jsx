import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";
import axiosInstance, {
  appointmentAxiosInstance,
  communityAxiosInstance,
  pharmacyAxiosInstance,
} from "../utils/axiosInstance";

const CreateAppointment = () => {
  const navigate = useNavigate();

  // State hooks for each form field
  const [preferedStartTime, setPreferedStartTime] = useState("");
  const [day1, setDay1] = useState("");
  const [day2, setDay2] = useState("");
  const [isRegistrationDone, setIsRegistrationDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      preferedStartTime,
      day1,
      day2,
    };

    setIsLoading(true);
    appointmentAxiosInstance
      .post("/appointment/schedule/create", data)
      .then((resp) => {
        console.log("The Response", resp);
        setIsRegistrationDone(true);
        navigate("/");
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
        <h1>Create Schedule</h1>
        <form className="registration-form" onSubmit={handleRegister}>
          <label htmlFor="preferedStartTime">
            Choose your preferred start time:
          </label>

          <select
            name="preferedStartTime"
            id="preferedStartTime"
            onChange={(e) => setPreferedStartTime(e.target.value)}
            required
          >
            <option value="08:00:00">08:00 AM</option>
            <option value="11:00:00">11:00 AM</option>
            <option value="14:00:00">02:00 PM</option>
            <option value="17:00:00">05:00 PM</option>
            <option value="20:00:00">08:00 PM</option>
          </select>

          <label htmlFor="day1">Choose day1:</label>

          <select
            onChange={(e) => setDay1(e.target.value)}
            required
            name="day1"
            id="day1"
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <label htmlFor="day2">Choose day2:</label>
          <select
            onChange={(e) => setDay2(e.target.value)}
            required
            name="day2"
            id="day2"
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateAppointment;
