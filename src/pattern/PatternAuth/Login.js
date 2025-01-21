import { FaEye } from "react-icons/fa";
import { errorOptions } from "../PatternError";

export const inputLogin = [
  {
    jenisInput: "input",

    placeholder: "01003xxxxx",
    type: "text",
    title: "NIP (Nomor Induk Pegawai)",
    name: "username",
    className: "",
    grid: "12",
    addOptionError: errorOptions.user_phone,
    error: "user_phone",
  },
  {
    jenisInput: "input",

    placeholder: "*******",
    type: "password",
    grid: "12",
    title: "Password",
    name: "password",
    className: "",
    icon: FaEye,
    onClick: true,
    addOptionError: errorOptions.user_password,
    error: "user_password",
  },
];
