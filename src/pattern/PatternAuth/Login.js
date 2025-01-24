import { FaEye } from "react-icons/fa";
import { errorOptions } from "../index";

export const inputLogin = [
  {
    placeholder: "admin",
    type: "text",
    title: "Username: ",
    name: "username",
    labelClassName: "text-[12px] text-slate-700",
    inputClassName:
      "w-full rounded-md py-2 px-3 placeholder:text-[12px] border outline-none border-slate-400 my-2 text-sm",

    addOptionError: errorOptions.username,
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
  },
];
