/** @format */

import { POST } from "../api";
import { SwalAlertBasic } from "../utils/alert";
import { removeCookies, setCookies } from "./handleCookies";

export const loginService = async (data, extraOptions) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await POST("auth/login", data, headers);
    if (response.data.status === true) {
      // alert(response.data.message);
      setCookies(response);
      extraOptions.navigate("/dashboard");
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
    } else if (response.data.status === false) {
      SwalAlertBasic({
        icon: "error",
        text: response.data.message,
      });
    }
  } catch (error) {
    // console.error(error);
    // alert(error.response.data.message);
    // console.log(error);
    if (error.response.data.status === false) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
};

export const logoutService = () => {
  window.location.href = "/login";
  removeCookies();
};
