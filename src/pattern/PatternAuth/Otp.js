import { errorOptions } from "../PatternError";

export const inputOtp = [
  {
    placeholder: "0812345",
    type: "tel",
    title: "Phone: ",
    name: "phone_number",
    labelClassName: "text-[12px] text-slate-700",
    inputClassName:
      "w-full rounded-md py-2 px-3 placeholder:text-[12px] border outline-none border-slate-400 my-2 text-sm",

    addOptionError: errorOptions.phone,
    error: "phone_number",
  },
];
