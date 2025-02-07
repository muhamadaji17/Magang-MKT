import { FaEye } from "react-icons/fa";
import { errorOptions } from "../PatternError";

export const inputLogin = [
  {
    placeholder: "admin",
    type: "text",
    title: "Username: ",
    name: "username",
    addOptionError: errorOptions.username,
  },
  {
    placeholder: "******",
    type: "password",
    title: "Password: ",
    name: "password",
    icon: FaEye,
    onClick: true,
    addOptionError: errorOptions.password,
  },
];
