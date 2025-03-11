import axiosInstance from "@/lib/axiosInstance";

export const GET = async (endpoint, token) => {
  try {
    const response = await axiosInstance.get(`/${endpoint}`, {
      headers: {
        "x-access-token": `mktech ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const POST = async (endpoint, data, token, isMultipart = false) => {
  try {
    const response = await axiosInstance.post(`/${endpoint}`, data, {
      headers: {
        "Content-Type": isMultipart
          ? "multipart/form-data"
          : "application/json",
        "x-access-token": token ? `mktech ${token}` : "",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PUT = async (endpoint, data, token, isMultipart = false) => {
  try {
    const response = await axiosInstance.put(`/${endpoint}`, data, {
      headers: {
        "Content-Type": isMultipart
          ? "multipart/form-data"
          : "application/json",
        "x-access-token": token ? `mktech ${token}` : "",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DELETE = async (endpoint, token) => {
  try {
    const response = await axiosInstance.delete(`/${endpoint}`, {
      headers: {
        "x-access-token": token ? `mktech ${token}` : "",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
