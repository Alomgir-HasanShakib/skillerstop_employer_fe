import axiosInstance from "../axiosInstance/axiosInstance";

export const loginUser = async (formData) => {
  const response = await axiosInstance.post("/employer/auth/login", formData);
  const data = response.data;

  const user = {
    accessToken: data.accessToken,
    accountVerified: data.accountVerified,
    email: data.email,
    emailVerified: data.emailVerified,
    name: data.name,
    phoneVerified: data.phoneVerified,
    username: data.username,
  };

  return { data: { accessToken: data.accessToken, user } };
};

export const registerUser = async (formData) => {
  const response = await axiosInstance.post(
    "/employer/auth/register",
    formData
  );
  const data = response.data;

  const user = {
    accessToken: data.accessToken,
    accountVerified: data.accountVerified,
    email: data.email,
    emailVerified: data.emailVerified,
    name: data.name,
    phoneVerified: data.phoneVerified,
    username: data.username,
  };

  return { data: { accessToken: data.accessToken, user } };
};

// Verify Email API
export const verifyEmail = async (formData) => {
  const response = await axiosInstance.post(
    "/employer/auth/verify-email",
    formData
  );
  const data = response.data;
  console.log("verify data...", data);

  const user = {
    accessToken: data.accessToken,
    accountVerified: data.accountVerified,
    email: data.email,
    emailVerified: data.emailVerified,
    name: data.name,
    phoneVerified: data.phoneVerified,
    username: data.username,
  };

  return { data: { accessToken: data.accessToken, user } };
};
