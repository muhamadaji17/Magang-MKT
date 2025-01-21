import { POST_AUTH } from "../api";

export const LoginService = async (data) => {
  // const manipulateData = {
  //     username
  // }
  try {
    const response = await POST_AUTH("auth/login", data);

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
