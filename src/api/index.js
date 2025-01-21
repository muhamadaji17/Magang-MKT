import axios from "axios";

export const GET = async (endpoint, access_token) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-token": `xgiandra ${access_token}`,
      },
    }
  );
  return response;
};

export const POST_AUTH = async (endpoint, data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/${endpoint}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
