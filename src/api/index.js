/** @format */

import axios from "axios";

export const POST = (endpoint, data, headers) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/${endpoint}`, data, {
    headers,
  });
};

export const GET = (endpoint, accessToken) => {
  return axios.get(`${import.meta.env.VITE_API_URL}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `mktech ${accessToken}`,
    },
  });
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
