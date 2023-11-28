import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentDetailsPage.css";
import { appointmentAxiosInstance } from "../utils/axiosInstance";

const DoctorAppointmentTable = () => {
  const navigate = useNavigate();
  const doctorId = localStorage.getItem("userId");
  const [doctorAppointmentSlotList, setDoctorAppointmentSlotList] = useState(
    []
  );
  const [bookingMessage, setBookingMessage] = useState("");
  const [errors, setErrors] = useState();

  // Function to fetch the appointment slots
  const fetchAppointmentSlots = () => {
    appointmentAxiosInstance
      .get(`/appointment/${doctorId}/slot/get`)
      .then((resp) => setDoctorAppointmentSlotList(resp.data))
      .catch((error) => setErrors(error));
  };

  useEffect(() => {
    fetchAppointmentSlots();
  }, [doctorId]);

  const bookAppointment = (slotId) => {
    appointmentAxiosInstance
      .put(`/appointment/${slotId}/makeAvailable/bySlotId`)
      .then((response) => {
        if (response.data === true) {
          setBookingMessage("Successful!");
          fetchAppointmentSlots(); // Refresh the slots
        } else {
          setBookingMessage("Try again!");
        }
        setTimeout(() => {
          setBookingMessage(""); // Clear the message after 2 seconds
        }, 2000);
      })
      .catch((error) => {
        console.error("Error booking the appointment", error);
        setBookingMessage("An error occurred. Please try again later."); // Set an error message
        setTimeout(() => {
          setBookingMessage(""); // Clear the message after 2 seconds
        }, 2000);
        setErrors(error);
      });
  };

  const makeUnavailable = (slotId) => {
    appointmentAxiosInstance
      .put(`/appointment/${slotId}/makeUnavailable`)
      .then((response) => {
        if (response.data === true) {
          setBookingMessage("Successful!");
          fetchAppointmentSlots(); // Refresh the slots
        } else {
          setBookingMessage("Try again after completion of that!");
        }
        setTimeout(() => {
          setBookingMessage(""); // Clear the message after 2 seconds
        }, 2000);
      })
      .catch((error) => {
        console.error("Error making the slot unavailable", error);
        setBookingMessage("An error occurred. Please try again later."); // Set an error message
        setTimeout(() => {
          setBookingMessage(""); // Clear the message after 2 seconds
        }, 2000);
        setErrors(error);
      });
  };

  return (
    <div className="slot-table-container">
      <div className="table-header">
        <h2 className="table-title">Slot List</h2>
        {bookingMessage && (
          <div className="booking-message">{bookingMessage}</div>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Slot ID</th>
            <th>Doctor ID</th>
            <th>Day</th>
            <th>Status</th>
            <th>Start Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctorAppointmentSlotList.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.doctorId}</td>
              <td>{appointment.day}</td>
              <td>{appointment.status}</td>
              <td>{appointment.startTime}</td>
              <td>
                {appointment?.status === "BOOKED" ? (
                  <button onClick={() => bookAppointment(appointment.id)}>
                    Complete
                  </button>
                ) : appointment?.status === "UNAVAILABLE" ? (
                  <button onClick={() => bookAppointment(appointment.id)}>
                    Make Available
                  </button>
                ) : (
                  <button onClick={() => makeUnavailable(appointment.id)}>
                    Make Unavailable
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorAppointmentTable;
