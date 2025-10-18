import axiosInstance from "../axiosInstance/axiosInstance";

export const updateProfile = async (profileData) => {
  const response = await axiosInstance.patch("/candidate/profile", profileData);
  console.log("Profile Update Response", response.data);
  return response.data;
};

export const getProfile = async () => {
  const response = await axiosInstance.get("/candidate/profile");
  console.log("Profile Get Response", response.data);
  return response.data;
};
