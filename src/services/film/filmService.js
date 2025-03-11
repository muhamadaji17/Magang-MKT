import { GET, POST, PUT } from "@/api/auth";

export const fetchFilm = async (token) => {
  try {
    const response = await GET("crud/films", token);
    return response.payload;
  } catch (error) {
    console.error("Error :", error);
  }
};

export const postFilm = async (data, token) => {
  try {
    const response = await POST(`crud/films`, data, token, true);
    return response;
  } catch (error) {
    console.error("error post :", error);
  }
};

export const updateFilm = async (filmId, updatedData, token) => {
  try {
    const response = await PUT(
      `crud/films/${filmId}`,
      updatedData,
      token,
      true
    );
    return response;
  } catch (error) {
    console.error("Error updating film: ", error);
    throw error;
  }
};
