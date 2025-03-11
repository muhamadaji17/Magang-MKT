import showAlert from "@/utils/showAlert";
import { POST } from "@/api/auth";

export const submitForm = async (data, login, navigate) => {
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
        response.data.roles.roleName
      );
      showAlert("success", "Success", response.message);
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};
