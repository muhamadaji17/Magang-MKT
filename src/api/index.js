/** @format */

import axios from "axios";
import { SwalAlertBasic } from "../utils";

export const POST = (endpoint, data, headers) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/${endpoint}`, data, {
    headers,
  });
};

export const GET = async (endpoint, accessToken) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/${endpoint}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `mktech ${accessToken}`,
        },
      }
    );

    return response;
  } catch (error) {
    if (error.response.status === 401) {
      SwalAlertBasic({
        icon: "warning",
        title: "Unauthorized",
        text: error.response.data.errors[0].message,
      });
    } else if (error.response.status === 403) {
      SwalAlertBasic({
        icon: "warning",
        title: "Access Denied",
        text: error.response.data.message,
      });
    }
  }
};

export const PUT = (endpoint, data, headers) => {
  return axios.put(
    `${import.meta.env.VITE_API_URL}/${endpoint}/${data.id}`,
    data,
    { headers }
  );
};

export const DELETE = (endpoint, accessToken, id) => {
  return axios.delete(`${import.meta.env.VITE_API_URL}/${endpoint}/${id}`, {
    headers: { "x-access-token": `mktech ${accessToken}` },
  });
};
