// src/api/job.js
import axiosInstance from "../axiosInstance/axiosInstance";

// Create Job
export const createJob = async (jobData) => {
  const response = await axiosInstance.post("/employer/job", jobData);
  console.log("Job Create Response:", response.data);
  return response.data;
};

// Get All Jobs
export const getAllJobs = async () => {
  const response = await axiosInstance.get("/employer/job");
  console.log("All Jobs Response:", response?.data);
  return response?.data;
};

// Get Single Job by ID
export const getJobById = async (id) => {
  const response = await axiosInstance.get(`/employer/job/${id}`);
  console.log("Job Get By ID Response:", response.data);
  return response.data;
};

// Update Job by ID
export const updateJob = async (id, jobData) => {
  const response = await axiosInstance.patch(`/employer/job/${id}`, jobData);
  return response.data;
};

// Delete Job by ID
export const deleteJob = async (id) => {
  const response = await axiosInstance.delete(`/employer/job/${id}`);
  console.log("Job Delete Response:", response.data);
  return response.data;
};
