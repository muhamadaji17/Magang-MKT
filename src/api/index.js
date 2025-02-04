import axios from "axios";

export const POST_AUTH = async (endpoint, data) => {
  const url_api = `${import.meta.env.VITE_URL_DEV}/${endpoint}`;
  const response = await axios.post(url_api, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};

export const GET = async (endpoint, accessToken) => {
  const url_api = `${import.meta.env.VITE_URL_CRUD}/${endpoint}`;
  const response = await axios.get(url_api, {
    headers: {
      "x-token": `mktech ${accessToken}`,
    },
  });

  return response;
};

export const POST_DATA = async (endpoint, accessToken, data) => {
  const url_api = `${import.meta.env.VITE_URL_CRUD}/${endpoint}`;
  const response = await axios.post(url_api, data, {
    headers: {
      "Content-Type": "application/json",
      "x-token": `mktech ${accessToken}`,
    },
  });

  return response;
};

export const PUT_DATA = async (endpoint, accessToken, data) => {
  const url_api = `${import.meta.env.VITE_URL_CRUD}/${endpoint}`;
  const response = await axios.put(url_api, data, {
    headers: {
      "Content-Type": "application/json",
      "x-token": `mktech ${accessToken}`,
    },
  });

  return response;
};

export const DELETE = async (endpoint, accessToken) => {
  const url_api = `${import.meta.env.VITE_URL_CRUD}/${endpoint}`;
  const response = await axios.delete(url_api, {
    headers: { "x-token": `mktech ${accessToken}` },
  });

  return response;
};
