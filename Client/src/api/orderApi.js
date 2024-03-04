import axios from "axios";
import axiosInstance from "./axiosInstance";

export const viewOrders = async () => {
  try {
    const response = await axiosInstance.get("/orders");
    return await response.data;
  } catch (error) {
    console.log(error.message);
  }
};
// Rest of your code...

export const viewOrder = async (orderData) => {
  try {
    const response = await axiosInstance.get("/order/{id}", orderData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error in createOrder:", error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await axiosInstance.post("/order/store", orderData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error in createOrder:", error);
    throw error;
  }
};
