import { POST_AUTH } from "../api";
import { TriggerAlert } from "../utils/TriggerAlert";

export const LoginService = async ({
  data,
  resetField,
  navigate,
  setLoading,
  setState,
}) => {
  try {
    const response = await POST_AUTH("login", data);
    console.log(response);

    if (response.data.status) {
      TriggerAlert({
        title: "Berhasil!",
        icon: "success",
        text: response.data.message,
      });
      sessionStorage.setItem("accessToken", response.data.data.accessToken);
      setState(response.data.data.accessToken);
      resetField();
      setLoading(false);
      navigate("/");
    }
  } catch (error) {
    console.log(error);
    setLoading(false);
    TriggerAlert({
      title: "Gagal!",
      icon: "error",
      text: error.status === 404 ? error.response.data.message : error.message,
    });
  }
};

export const RegisterService = async ({ data, resetField, navigate }) => {
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
    }
    console.log(response);
  } catch (error) {
    console.error(error);
    TriggerAlert({
      title: "Gagal!",
      icon: "error",
      text: error.message,
    });
  }
};

export const OtpService = async ({ data, resetField, setState, navigate }) => {
  try {
    const response = await POST_AUTH("forgot-password", data);
    console.log(response);
    if (response.data.status === true) {
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
  }
};

export const ResetPasswordService = async ({ data, resetField, navigate }) => {
  const { codeOtp: otp, phone_number, password } = data;
  console.log(data);

  const body = { otp, phone_number, password };
  try {
    const response = await POST_AUTH("set-pass", body);
    console.log(response);
    if (response.data.status === true) {
      TriggerAlert({
        title: "Berhasil!",
        icon: "success",
        text: response.data.message,
      });

      resetField();
      navigate("/login");
    }
  } catch (error) {
    console.error(error);
    TriggerAlert({
      title: "Gagal!",
      icon: "error",
      text: error.message,
    });
  }
};
