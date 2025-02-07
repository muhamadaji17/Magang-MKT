import { errorOptions } from "../PatternError";

export const inputOtp = [
  {
    placeholder: "0812345",
    type: "tel",
    title: "Phone: ",
    name: "phone_number",
    addOptionError: errorOptions.phone,
    error: "phone_number",
  },
];
