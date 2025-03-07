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
    label: "NIP",
    grid: "12",
    addOptionError: errorOptions.username,
    error: "username",
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
    label: "Password",

    addOptionError: errorOptions.password,
    error: "password",
  },
];
