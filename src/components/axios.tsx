import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 20000, // 20 seconds
});
