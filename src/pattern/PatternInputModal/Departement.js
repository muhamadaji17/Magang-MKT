import { errorOptions } from "../PatternError";

export const inputAddDepartement = [
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Nama Departemen: ",
    name: "nama_departement",
    addOptionError: errorOptions.nameInModal,
  },
  {
    placeholder: "0X12B",
    type: "text",
    title: "Kode Departemen: ",
    name: "departement_code",
    addOptionError: errorOptions.codeInModal,
  },
];

export const inputEditDepartement = (data) => [
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Nama Departemen: ",
    name: "nama_departement",
    addOptionError: errorOptions.nameInModal,
    defaultValue: data,
  },
  {
    placeholder: "0X12B",
    type: "text",
    title: "Code Departemen: ",
    name: "departement_code",
    addOptionError: errorOptions.codeInModal,
    defaultValue: data,
  },
];
