import { GET } from "../api";

export const DataDepartementService = async (accessToken, setState) => {
  try {
    const response = await GET("departement", accessToken);
    setState(response.data.payload);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
