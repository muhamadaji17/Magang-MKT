import { POST_AUTH } from "../api";

export const LoginService = async (data) => {
  // const manipulateData = {
  //     username
  // }
  try {
    await POST_AUTH("auth/login", data);
  } catch (error) {
    console.error(error);
  }
};

export const RegisterService = async (data) => {
  try {
    await POST_AUTH("auth/register", data);
  } catch (error) {
    console.error(error);
  }
};
