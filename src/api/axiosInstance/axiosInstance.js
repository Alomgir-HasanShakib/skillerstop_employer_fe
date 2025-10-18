import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for auth token or error handling
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    // example
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handler (optional)
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
