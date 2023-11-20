import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8083"
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = ` ${token}`;
  }

  return config;
});

export default axiosInstance;