import { FaEye } from "react-icons/fa";
import { errorOptions } from "../PatternError";

export const inputRegister = [
  {
    placeholder: "admin",
    type: "text",
    title: "Username: ",
    name: "username",
    addOptionError: errorOptions.username,
    error: "username",
  },
  {
    placeholder: "email",
    type: "email",
    title: "Email: ",
    name: "email",
    addOptionError: errorOptions.email,
    error: "email",
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
    placeholder: "081234",
    type: "tel",
    title: "Phone: ",
    name: "phone_number",
    addOptionError: errorOptions.phone,
    error: "phone_number",
  },
];
