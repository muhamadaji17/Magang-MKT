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

export const forgotPasswordPattern = [
  {
    name: "email",
    type: "email",
    labelText: "Email",
    grid: 12,
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

  {
    name: "password",
    type: "password",
    labelText: "New Password",
    grid: 12,
    icon: FaEye,
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
    optionError: errorOptions.password,
  },

  {
    name: "confirmPassword",
    type: "password",
    labelText: "Confirm Password",
    grid: 12,
    optionError: errorOptions.confirm_password,
    icon: FaEye,
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
