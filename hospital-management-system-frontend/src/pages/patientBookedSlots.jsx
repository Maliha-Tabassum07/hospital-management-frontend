import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentDetailsPage.css";
import usePatientBookedHook from "../hooks/usePatientBookedHook";
import { appointmentAxiosInstance } from "../utils/axiosInstance";

const PatientBookedSlots = () => {
  const navigate = useNavigate();
  const { bookedSlots } = usePatientBookedHook();
  const [bookingMessage, setBookingMessage] = useState("");

  const handleJoinAppointment = (appointmentId) => {
    window.open(`/room/${appointmentId}`, "_blank");
  };
  const handleCancelAppointment = (slotId) => {
    appointmentAxiosInstance
      .put(`/appointment/${slotId}/cancel`)
      .then((response) => {
        if (response.data === true) {
          setBookingMessage("successful!");
        } else {
          setBookingMessage("Try again!");
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
  const renderCompletionStatus = (completed) => {
    return completed ? "Yes" : "No";
  };

  return (
    <div className="slot-table-container">
      <div className="table-header">
        <h2 className="table-title">Booked Appointment List</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Patient ID</th>
            <th>Booking Date</th>
            <th>Completed</th>
            <th>Start Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookedSlots &&
            bookedSlots.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.patientId}</td>
                <td>{appointment.bookingDate}</td>
                <td>{renderCompletionStatus(appointment.completion)}</td>
                <td>{appointment.appointmentSlotEntity.startTime}</td>
                <td>
                  {appointment.completion ? (
                    <button>Completed</button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleJoinAppointment(appointment.id)}
                      >
                        Telemedicine
                      </button>
                      <button
                        onClick={() => handleCancelAppointment(appointment.id)}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientBookedSlots;
