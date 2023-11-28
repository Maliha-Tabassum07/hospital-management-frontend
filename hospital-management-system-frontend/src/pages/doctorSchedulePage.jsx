import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorAppointmentSchedule.css";
import useSlotHook from "../hooks/useSlotHook";
import { appointmentAxiosInstance } from "../utils/axiosInstance";

const DoctorAppointmentSchedule = () => {
  const navigate = useNavigate();
  const doctorId = localStorage.getItem("userId");
  const [doctorAppointmentSlotList, setDoctorAppointmentSlotList] = useState(
    []
  );
  const [errors, setErrors] = useState();
  useEffect(() => {
    appointmentAxiosInstance
      .get(`/appointment/${doctorId}/schedule/get`)
      .then((resp) => setDoctorAppointmentSlotList(resp.data))
      .catch((error) => setErrors(error));
  }, [doctorId]);

  return (
    <div className="slot-table-container">
      <div className="table-header">
        <h2 className="table-title">Your Schedule</h2>
      </div>
      <h2>
        Preferred Start time:{doctorAppointmentSlotList.preferedStartTime}{" "}
      </h2>
      <h2>Day 1:{doctorAppointmentSlotList.day1}</h2>
      <h2>Day 2:{doctorAppointmentSlotList.day2}</h2>
    </div>
  );
};

export default DoctorAppointmentSchedule;
