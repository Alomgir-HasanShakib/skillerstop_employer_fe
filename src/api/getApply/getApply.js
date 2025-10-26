import axiosInstance from "../axiosInstance/axiosInstance";

// Get All Applicants by Job ID
export const getApplicantsByJobId = async (jobId) => {
  try {
    const response = await axiosInstance.get(`/employer/applicants/${jobId}`);
    console.log("Applicants for Job:", response.data);
    
    // বিভিন্ন possible response structures handle করা
    if (Array.isArray(response.data)) {
      return response.data;
    } else if (response.data && Array.isArray(response.data.applicants)) {
      return response.data.applicants;
    } else if (response.data && response.data.data) {
      return Array.isArray(response.data.data) ? response.data.data : [];
    } else {
      console.warn("Unexpected response structure:", response.data);
      return [];
    }
  } catch (error) {
    console.error(`Error fetching applicants for job ${jobId}:`, error);
    throw error;
  }
};

// Get Specific Applicant by Job ID and Username
export const getApplicantByJobAndUsername = async (jobId, username) => {
  try {
    const response = await axiosInstance.get(
      `/employer/applicants/${jobId}/${username}`
    );
    console.log("Single Applicant Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching applicant ${username} for job ${jobId}:`, error);
    throw error;
  }
};