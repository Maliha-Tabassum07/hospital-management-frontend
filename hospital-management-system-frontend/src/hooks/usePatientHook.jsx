import axiosInstance, { patientAxiosInstance } from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const usePatientHook = () => {
  const [patients, setPatients] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    patientAxiosInstance
      .get("/patient/all")
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setPatients(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { patients, handleSubmit, errors };
};

export default usePatientHook;
