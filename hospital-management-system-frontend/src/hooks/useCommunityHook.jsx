import axiosInstance, {
  appointmentAxiosInstance,
  communityAxiosInstance,
} from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const useCommunityHook = () => {
  const [communities, setCommunities] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    communityAxiosInstance
      .get("/community/get/all")
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setCommunities(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { communities, handleSubmit, errors };
};

export default useCommunityHook;
