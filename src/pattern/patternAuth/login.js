import errorOptions from "../errorOptions";
import { IoIosEye, IoMdEyeOff } from "react-icons/io";

const inputLogin = [
    {
        jenisInputan: "input",
        type: "text",
        title: "username",
        name: "username",
        placeholder: "your username",
        error: "username",
        addOptionError: errorOptions.username,
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "password",
        title: "password",
        name: "password",
        placeholder: "********",
        hiddenPasswordIcon: IoMdEyeOff,
        showPasswordIcon: IoIosEye,
        error: "password",
        addOptionError: errorOptions.password,
        grid: 12,
    },
];

export default inputLogin;
