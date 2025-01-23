import axios from "axios";

const apiPost = async (endpoint, data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/${endpoint}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);
  return response.data;
};

export default apiPost;
