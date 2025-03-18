import { POST } from "@/api/auth";
import showAlert from "@/utils/showAlert";

export const serviceLogin = async (data, login) => {
  try {
    const response = await POST("auth/login", {
      username: data.username,
      password: data.password,
    });
    console.log("Ini response", response);
    if (response.status === true) {
      login(
        response.data.AccessToken.accessToken,
        response.data.user.username,
        response.data.roles.roleName,
        response.data.user.userId
      );
      showAlert("success", "Success", response.message);
    }
  } catch (error) {
    showAlert("error", error.response.status, error.response.statusText);
    throw error;
  }
};
