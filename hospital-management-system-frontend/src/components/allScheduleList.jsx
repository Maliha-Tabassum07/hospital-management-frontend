import React from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentDetailsPage.css";
import useAppointmentHook from "../hooks/useAppointmentHook";

const AllScheduleList = () => {
  const navigate = useNavigate();
  const { appointments } = useAppointmentHook();

  return (
    <div className="appointment-table-container">
      <div className="table-header">
        <h2 className="table-title">Schedule List</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Schedule ID</th>
            <th>Doctor ID</th>
            <th>Start Time</th>
            <th>Day 1</th>
            <th>Day 2</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments.map((appointment) => (
              <tr key={appointment.specialId}>
                <td>{appointment.id}</td>
                <td>{appointment.doctorId}</td>
                <td>{appointment.preferedStartTime}</td>
                <td>{appointment.day1}</td>
                <td>{appointment.day2}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllScheduleList;
