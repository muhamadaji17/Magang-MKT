import axios from "axios";

export const apiCall = async (endpoint, data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}${endpoint}`,
      data
    );

    return response.data;
  } catch (error) {
    console.log(error) || "Terjadi kesalahan";
    throw error;
  }
};
