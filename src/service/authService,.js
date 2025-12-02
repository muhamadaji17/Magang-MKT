/** @format */

import { POST } from "../api";
import { SwalAlertBasic } from "../utils/alert";
import { removeCookies, setCookies } from "./handleCookies";
import Cookies from "js-cookie";

export const loginService = async (data, extraOptions) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const { navigate, setLoadingButton } = extraOptions;

  try {
    const response = await POST("auth/login", data, headers);
    if (response.data.status === true) {
      // alert(response.data.message);
      setCookies(response);
      navigate("/dashboard");
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

    setLoadingButton(false);
  } catch (error) {
    // console.error(error);
    // alert(error.response.data.message);
    // console.log(error);
    setLoadingButton(false);

    if (error.code) {
      SwalAlertBasic({
        icon: "error",
        text: error.message,
      });
    }

    if (error.response.data.status === false) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
};

export const otpService = async (data, extraOptions) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const { setLoadingButton, setType } = extraOptions;

  try {
    const response = await POST("auth/get-otp", data, headers);
    if (response.data.status === true) {
      // alert(response.data.message);
      Cookies.set("type", "otp");
      Cookies.set("datas", JSON.stringify(data));
      setType("otp");
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

    setLoadingButton(false);
  } catch (error) {
    // console.error(error);
    // alert(error.response.data.message);
    // console.log(error);
    setLoadingButton(false);
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
