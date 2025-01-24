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
