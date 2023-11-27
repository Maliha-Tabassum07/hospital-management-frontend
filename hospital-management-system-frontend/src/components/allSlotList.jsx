import React from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentDetailsPage.css";
import useSlotHook from "../hooks/useSlotHook";

const AllSlotList = () => {
  const navigate = useNavigate();
  const { appointments } = useSlotHook();

  return (
    <div className="slot-table-container">
      <div className="table-header">
        <h2 className="table-title">Slot List</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Slot ID</th>
            <th>Doctor ID</th>
            <th>Day</th>
            <th>Status</th>
            <th>Start Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments.map((appointment) => (
              <tr key={appointment.specialId}>
                <td>{appointment.id}</td>
                <td>{appointment.doctorId}</td>
                <td>{appointment.day}</td>
                <td>{appointment.status}</td>
                <td>{appointment.startTime}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSlotList;
