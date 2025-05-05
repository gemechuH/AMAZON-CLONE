import axios from 'axios'



const axiosBase_URL = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000, // Add timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export {axiosBase_URL}