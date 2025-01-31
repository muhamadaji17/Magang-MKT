import axios from "axios";

export const apiGet = async (endpoint, token) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}${endpoint}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-token": `mktech ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    // console.log(error) || "Terjadi kesalahan";
    throw error;
  }
};
