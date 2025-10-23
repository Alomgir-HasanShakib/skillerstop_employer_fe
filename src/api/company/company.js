// src/api/company.js
import axiosInstance from "../axiosInstance/axiosInstance";

// Create Company
export const createCompany = async (companyData) => {
  const response = await axiosInstance.post("/employer/company", companyData);
  console.log("Company Create Response:", response.data);
  return response.data;
};

// Get All Companies
export const getAllCompanies = async () => {
  const response = await axiosInstance.get("/employer/company");
  return response.data;
};

// Get Single Company by ID
export const getCompanyById = async (id) => {
  const response = await axiosInstance.get(`/employer/company/${id}`);
  console.log("Company Get By ID Response:", response.data);
  return response.data;
};

// Update Company by ID
export const updateCompany = async (id, companyData) => {
  const response = await axiosInstance.patch(`/employer/company/${id}`, companyData);
  console.log("Company Update Response:", response.data);
  return response.data;
};

// Delete Company by ID
export const deleteCompany = async (id) => {
  const response = await axiosInstance.delete(`/employer/company/${id}`);
  console.log("Company Delete Response:", response.data);
  return response.data;
};
