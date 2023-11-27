// axiosInstance.js

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8083',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});

export const pharmacyAxiosInstance = axios.create({
  baseURL: 'http://localhost:8086',
  headers: {
    'Content-Type': 'application/json',
  },
});
pharmacyAxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});
export const patientAxiosInstance = axios.create({
  baseURL: 'http://localhost:8082',
  headers: {
    'Content-Type': 'application/json',
  },
});
patientAxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});
export const appointmentAxiosInstance = axios.create({
  baseURL: 'http://localhost:8090',
  headers: {
    'Content-Type': 'application/json',
  },
});
appointmentAxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});
export const communityAxiosInstance = axios.create({
  baseURL: 'http://localhost:8091',
  headers: {
    'Content-Type': 'application/json',
  },
});
communityAxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});

export default axiosInstance;