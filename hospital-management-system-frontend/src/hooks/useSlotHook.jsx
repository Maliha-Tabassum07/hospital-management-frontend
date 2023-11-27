import axiosInstance, {
  appointmentAxiosInstance,
} from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const useAppointmentHook = () => {
  const [appointments, setAppointments] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    appointmentAxiosInstance
      .get("/appointment/slot/all")
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setAppointments(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { appointments, handleSubmit, errors };
};

export default useAppointmentHook;
