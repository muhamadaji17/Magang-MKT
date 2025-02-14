import cookie from "cookiejs";
import { POST_AUTH } from "../api";
import { TriggerAlert } from "../utils/TriggerAlert";

export const LoginService = async ({
  data,
  resetField,
  navigate,
  setLoading,
}) => {
  setLoading(true);
  try {
    const response = await POST_AUTH("login", data);
    console.log(response);

    if (response.data.status) {
      TriggerAlert({
        title: "Berhasil!",
        icon: "success",
        text: response.data.message,
      });
      cookie.set("authToken", response.data.data.accessToken, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
      });
      cookie.set("username", response.data.data.username);
      resetField();
      navigate("/");
    }
  } catch (error) {
    console.log(error);
    TriggerAlert({
      title: "Gagal!",
      icon: "error",
      text: error.status === 404 ? error.response.data.message : error.message,
    });
  } finally {
    setLoading(false);
  }
};

export const RegisterService = async ({
  data,
  resetField,
  navigate,
  setLoading,
}) => {
  setLoading(true);
  try {
    const response = await POST_AUTH("register", data);

    if (response.data.status) {
      TriggerAlert({
        title: "Berhasil!",
        icon: "success",
        text: response.data.message,
      });
      navigate("/login");
      resetField();
    } else {
      TriggerAlert({
        title: "Gagal!",
        icon: "error",
        text: response.data.message,
      });
    }
    console.log(response);
  } catch (error) {
    console.error(error);
    TriggerAlert({
      title: "Gagal!",
      icon: "error",
      text: error.message,
    });
  } finally {
    setLoading(false);
  }
};

export const OtpService = async ({
  data,
  resetField,
  setState,
  navigate,
  setLoading,
}) => {
  setLoading(true);
  try {
    const response = await POST_AUTH("forgot-password", data);
    console.log(response);
    if (response.data.status) {
      TriggerAlert({
        title: "Berhasil!",
        icon: "success",
        text: response.data.message,
      });
      resetField();
      setState(data.phone_number);
      navigate("reset-password");
    } else {
      TriggerAlert({
        title: "Gagal!",
        icon: "error",
        text: response.data.message,
      });
    }
  } catch (error) {
    console.error(error);
    TriggerAlert({
      title: "Gagal!",
      icon: "error",
      text: error.message,
    });
  } finally {
    setLoading(false);
  }
};

export const ResetPasswordService = async ({
  data,
  resetField,
  navigate,
  setLoading,
}) => {
  const { codeOtp: otp, phone_number, password } = data;
  const body = { otp, phone_number, password };
  setLoading(true);
  try {
    const response = await POST_AUTH("set-pass", body);
    console.log(response);
    if (response.data.status) {
      TriggerAlert({
        title: "Berhasil!",
        icon: "success",
        text: response.data.message,
      });

      resetField();
      navigate("/login");
    } else {
      TriggerAlert({
        title: "Gagal!",
        icon: "error",
        text: response.data.message,
      });
    }
  } catch (error) {
    console.error(error);
    TriggerAlert({
      title: "Gagal!",
      icon: "error",
      text: error.message,
    });
  } finally {
    setLoading(false);
  }
};

export const signOut = () => {
  cookie.remove("authToken");
  cookie.remove("username");
};
