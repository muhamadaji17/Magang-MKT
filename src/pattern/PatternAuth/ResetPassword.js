import { FaEye } from "react-icons/fa";
import { errorOptions } from "../PatternError";

export const inputResetPassword = [
  {
    placeholder: "12345",
    type: "tel",
    title: "Code Otp ",
    name: "codeOtp",
    addOptionError: errorOptions.codeOtp,
    error: "codeOtp",
  },
  {
    placeholder: "******",
    type: "password",
    title: "Password: ",
    name: "password",
    icon: FaEye,
    onClick: true,
    addOptionError: errorOptions.password,
    error: "password",
  },
  {
    placeholder: "******",
    type: "password",
    title: "Confirm Password: ",
    name: "confirmPassword",
    icon: FaEye,
    onClick: true,
    addOptionError: errorOptions.confirmPassword,
    error: "confirmPassword",
  },
];
