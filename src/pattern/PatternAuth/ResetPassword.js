import { FaEye } from "react-icons/fa";
import { errorOptions } from "../PatternError";

export const inputResetPassword = [
  {
    placeholder: "12345",
    type: "tel",
    title: "Code Otp ",
    name: "codeOtp",
    labelClassName: "text-[12px] text-slate-700",
    inputClassName:
      "w-full rounded-md py-2 px-3 placeholder:text-[12px] border outline-none border-slate-400 my-2 text-sm",

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
    labelClassName: "text-[12px] text-slate-700",
    inputClassName:
      "w-full rounded-md py-2 px-3 placeholder:text-[12px] border outline-none border-slate-400 my-2 text-sm",
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
    labelClassName: "text-[12px] text-slate-700",
    inputClassName:
      "w-full rounded-md py-2 px-3 placeholder:text-[12px] border outline-none border-slate-400 my-2 text-sm",
    addOptionError: errorOptions.confirmPassword,
    error: "confirmPassword",
  },
];
