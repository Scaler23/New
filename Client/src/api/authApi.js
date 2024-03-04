import axiosInstance from "./axiosInstance";

export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/login", userData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error in loginUser:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/register", userData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error in loginUser:", error);
    throw error;
  }
};
