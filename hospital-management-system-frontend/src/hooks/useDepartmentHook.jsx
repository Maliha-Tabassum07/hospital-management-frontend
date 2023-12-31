import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const useDepartmentHook = () => {
  const [departments, setDepartments] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axiosInstance
      .get("/department/all")
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setDepartments(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { departments, handleSubmit, errors };
};

export default useDepartmentHook;
