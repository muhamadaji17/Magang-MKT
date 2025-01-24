import axios from "axios";

export const apiCall = async (
  endpoint,
  data,
  successCallback,
  errorCallback
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}${endpoint}`,
      data
    );

    if (response.data.status === true) {
      successCallback(response.data.message);
    }

    return response.data;
  } catch (error) {
    errorCallback(error.response?.data?.message || "Terjadi kesalahan");
    throw error;
  }
};
