import { errorOptions } from "../PatternError";

export const inputAddDepartement = [
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Nama Departemen: ",
    name: "nama_departement",
    addOptionError: errorOptions.departementName,
  },
  {
    placeholder: "0X12B",
    type: "text",
    title: "Kode Departemen: ",
    name: "departement_code",
    addOptionError: errorOptions.departementCode,
  },
];

export const inputEditDepartement = (data) => [
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Nama Departemen: ",
    name: "nama_departement",
    addOptionError: errorOptions.departementName,
    defaultValue: data,
  },
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Nama Departemen: ",
    name: "departement_code",
    addOptionError: errorOptions.departementName,
    defaultValue: data,
  },
];
