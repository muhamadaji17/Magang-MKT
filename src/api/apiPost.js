import axios from "axios";

export const apiCall = async (endpoint, data, token) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}${endpoint}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "x-token": `mktech ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error) || "Terjadi kesalahan";
    throw error;
  }
};
