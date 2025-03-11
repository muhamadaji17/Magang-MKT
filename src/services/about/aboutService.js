import { GET, POST } from "@/api/auth";

export const fetchAbout = async (token) => {
  const response = await GET("crud/about", token);
  console.log("Ini fetch about:", response);
  return response.payload;
};

export const postAbout = async (data, token) => {
  const response = await POST(`crud/about`, data, token);
  console.log("Ini post about:", response);
  return response;
};
