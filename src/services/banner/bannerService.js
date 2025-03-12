import { DELETE, GET, POST, PUT } from "@/api/auth";
import showAlert from "@/utils/showAlert";

export const fetchBanner = async (token) => {
  try {
    const response = await GET("crud/banner", token);
    return response.payload;
  } catch (error) {
    console.error("Error fetching banner: ", error);
    throw error;
  }
};

export const updateBanner = async (bannerId, updatedData, token) => {
  try {
    const response = await PUT(
      `crud/banner/${bannerId}`,
      updatedData,
      token,
      true
    );
    return response;
  } catch (error) {
    showAlert("error", "Error", error.response.data.message);
    throw error;
  }
};

export const postBanner = async (data, token) => {
  try {
    const response = await POST(`crud/banner`, data, token, true);
    return response;
  } catch (error) {
    showAlert("error", "Error", error.response.data.message);
    throw error;
  }
};

export const deleteBanner = async (bannerId, token) => {
  console.log("Ini token: ", token);
  try {
    const response = await DELETE(`crud/banner/${bannerId}`, token);
    return response;
  } catch (error) {
    console.error("error delete :", error);
  }
};
