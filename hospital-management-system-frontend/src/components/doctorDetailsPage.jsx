import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance, {
  appointmentAxiosInstance,
} from "../utils/axiosInstance";
import "./DepartmentDetailsPage.css";

const DoctorDetailsPage = () => {
  const navigate = useNavigate();
  const { doctorId } = useParams();
  const [doctorDetails, setDoctorDetails] = useState();
  const [doctorAppointmentSchedule, setDoctorAppointmentSchedule] = useState(
    []
  );
  const [doctorAppointmentSlotList, setDoctorAppointmentSlotList] = useState(
    []
  );
  const [errors, setErrors] = useState();
  const [bookingMessage, setBookingMessage] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/doctor/${doctorId}/get`)
      .then((resp) => setDoctorDetails(resp.data))
      .catch((error) => setErrors(error));

    appointmentAxiosInstance
      .get(`/appointment/${doctorId}/schedule/get`)
      .then((resp) => setDoctorAppointmentSchedule(resp.data))
      .catch((error) => setErrors(error));

    appointmentAxiosInstance
      .get(`/appointment/${doctorId}/slot/get`)
      .then((resp) => setDoctorAppointmentSlotList(resp.data))
      .catch((error) => setErrors(error));
  }, [doctorId]);
  // Function to handle booking an appointment
  const bookAppointment = (slotId) => {
    appointmentAxiosInstance
      .post(`/appointment/${slotId}/book`)
      .then((response) => {
        if (response.data === true) {
          setBookingMessage("Booking successful!");
        } else {
          setBookingMessage(
            "You already booked one appointment. Try again after completion of that!"
          );
        }
        setTimeout(() => {
          navigate("/patient/landing"); // Clear the message after 2 seconds
        }, 2000);
      })
      .catch((error) => {
        // Handle errors here, such as showing a message to the user
        console.error("Error booking the appointment", error);
        setBookingMessage("An error occurred. Please try again later."); // Set an error message
        setTimeout(() => {
          setBookingMessage(""); // Clear the message after 2 seconds
        }, 2000);
        setErrors(error);
      });
  };

  return (
    <div className="doctor-details-page">
      <div className="doctor-details-container">
        <div className="doctor-image-container">
          <img
            src={doctorDetails?.imageUrl}
            alt={`Dr. ${doctorDetails?.name}`}
            className="doctor-image"
          />
        </div>
        <div className="doctor-info-container">
          <h2>{doctorDetails?.name}</h2>
          <p>{doctorDetails?.qualification}</p>
          <p>{doctorDetails?.designationDTO.name}</p>
          <p>Department: {doctorDetails?.departmentDTO.name}</p>
          <div className="doctor-schedule">
            <h3>Schedule:</h3>
            <p>
              Days: {doctorAppointmentSchedule?.day1},{" "}
              {doctorAppointmentSchedule?.day2}
            </p>
            <p>
              Check-up starts: {doctorAppointmentSchedule?.preferedStartTime}
            </p>
            <p>N/B: Will sit for 3 hours from the starting time</p>
          </div>
        </div>
      </div>
      {bookingMessage && (
        <div className="booking-message">{bookingMessage}</div>
      )}

      <div className="doctor-slots-container">
        <h2>Slots:</h2>
        <table className="slots-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Day</th>
              <th>Start Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctorAppointmentSlotList.map((slot, index) => (
              <tr key={index}>
                <td>{slot.id}</td>
                <td>{slot.status}</td>
                <td>{slot.day}</td>
                <td>{slot.startTime}</td>
                <td>
                  {slot?.status === "AVAILABLE" ? (
                    <button onClick={() => bookAppointment(slot.id)}>
                      Book Appointment
                    </button>
                  ) : (
                    <button disabled>Cannot Book</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </div>
  );
};

export default DoctorDetailsPage;
