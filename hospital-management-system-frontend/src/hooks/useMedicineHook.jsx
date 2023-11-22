import { useEffect, useState } from "react";

import { pharmacyAxiosInstance } from "../utils/axiosInstance";

const useMedicineHook = () => {
  const [medicines, setMedicines] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    pharmacyAxiosInstance
      .get("/pharmacy/medicine/all")
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setMedicines(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { medicines, handleSubmit, errors };
};

export default useMedicineHook;
