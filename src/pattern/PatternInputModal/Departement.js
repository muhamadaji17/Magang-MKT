import { errorOptions } from "../PatternError";

export const inputAddDepartement = [
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Nama Departemen: ",
    name: "nama_departement",
    labelClassName: "text-[12px] font-semibold text-slate-700",
    inputClassName:
      "w-full rounded-md py-2 px-3 placeholder:text-[12px] border outline-none border-slate-400 my-2 text-sm",

    addOptionError: errorOptions.departementName,
  },
  {
    placeholder: "0X12B",
    type: "text",
    title: "Kode Departemen: ",
    name: "departement_code",
    labelClassName: "text-[12px] font-semibold text-slate-700",
    inputClassName:
      "w-full rounded-md py-2 px-3 placeholder:text-[12px] border outline-none border-slate-400 my-2 text-sm",
    addOptionError: errorOptions.departementCode,
  },
];

export const inputEditDepartement = [
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Nama Departemen: ",
    name: "nama_departement",
    labelClassName: "text-[12px] font-semibold text-slate-700",
    inputClassName:
      "w-full rounded-md py-2 px-3 placeholder:text-[12px] border outline-none border-slate-400 my-2 text-sm",

    addOptionError: errorOptions.departementName,
  },
];
