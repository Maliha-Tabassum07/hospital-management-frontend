import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const useDoctorHook = () => {
  const [doctors, setDoctors] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axiosInstance
      .get("/doctor/all")
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setDoctors(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { doctors, handleSubmit, errors };
};

export default useDoctorHook;
