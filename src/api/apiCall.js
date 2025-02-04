import axios from "axios";

export const apiPost = async (endpoint, data, token) => {
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
