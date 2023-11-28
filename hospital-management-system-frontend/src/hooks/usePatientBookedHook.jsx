import axiosInstance, {
  appointmentAxiosInstance,
} from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const usePatientBookedHook = () => {
  const [bookedSlots, setBookedSlots] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    appointmentAxiosInstance
      .get("appointment/get/appointmentBooked")
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setBookedSlots(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { bookedSlots, handleSubmit, errors };
};

export default usePatientBookedHook;
