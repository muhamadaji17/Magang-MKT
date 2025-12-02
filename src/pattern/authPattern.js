/** @format */

import { FaEye } from "react-icons/fa";
import { errorOptions } from "./error";

export const loginPattern = [
  {
    name: "username",
    type: "text",
    grid: 12,
    labelText: "Username",
    optionError: errorOptions.username,
    sx: {
      "& .MuiOutlinedInput-root": {
        // backgroundColor: "white", // bg putih
        color: "#ccc",

        "& fieldset": {
          borderColor: "#aaa", // warna border normal
        },
        "&:hover fieldset": {
          borderColor: "#aaa", // warna saat hover
        },
        "&.Mui-focused fieldset": {
          borderColor: "#aaa", // warna saat focus
          borderWidth: 2,
        },
      },
      "& .MuiInputLabel-root": {
        color: "#ccc", // warna label default
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#aaa", // warna label saat fokus
      },
    },
  },
  {
    name: "password",
    type: "password",
    labelText: "Password",
    grid: 12,
    icon: FaEye,
    optionError: errorOptions.password,
    sx: {
      "& .MuiOutlinedInput-root": {
        // backgroundColor: "white", // bg putih
        color: "#ccc",

        "& fieldset": {
          borderColor: "#aaa", // warna border normal
        },
        "&:hover fieldset": {
          borderColor: "#aaa", // warna saat hover
        },
        "&.Mui-focused fieldset": {
          borderColor: "#aaa", // warna saat focus
          borderWidth: 2,
        },
      },
      "& .MuiInputLabel-root": {
        color: "#ccc", // warna label default
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#aaa", // warna label saat fokus
      },
    },
  },
];
export const getOTPPattern = [
  {
    name: "email",
    type: "email",
    grid: 12,
    labelText: "E-Mail",
    optionError: errorOptions.email,
    sx: {
      "& .MuiOutlinedInput-root": {
        // backgroundColor: "white", // bg putih
        color: "#ccc",

        "& fieldset": {
          borderColor: "#aaa", // warna border normal
        },
        "&:hover fieldset": {
          borderColor: "#aaa", // warna saat hover
        },
        "&.Mui-focused fieldset": {
          borderColor: "#aaa", // warna saat focus
          borderWidth: 2,
        },
      },
      "& .MuiInputLabel-root": {
        color: "#ccc", // warna label default
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#aaa", // warna label saat fokus
      },
    },
  },
];
