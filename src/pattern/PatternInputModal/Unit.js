import { errorOptions } from "../PatternError";

export const inputAddUnit = (dataDepartement) => [
  {
    placeholder: "Pilih Departemen",
    type: "select",
    title: "Nama Departemen: ",
    name: "id_departement",
    id: "id_departement",
    addOptionError: errorOptions.selectInput,
    option: dataDepartement.map((data) => ({
      name: data.nama_departement,
      value: data.id,
    })),
  },
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Nama Unit: ",
    name: "nama_unit",
    addOptionError: errorOptions.codeInModal,
  },
  {
    placeholder: "021XB",
    type: "text",
    title: "Code Unit: ",
    name: "unit_code",
    addOptionError: errorOptions.codeInModal,
  },
];

export const inputEditUnit = (data, dataDepartement) => [
  {
    placeholder: "Pilih Departemen",
    type: "select",
    title: "Nama Departemen: ",
    name: "id_departement",
    id: "id_departement",
    addOptionError: errorOptions.selectInput,
    defaultValue: data,
    option: dataDepartement.map((data) => ({
      name: data.nama_departement,
      value: data.id,
    })),
  },
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Nama Unit: ",
    name: "nama_unit",
    addOptionError: errorOptions.nameInModal,
    defaultValue: data,
  },
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Code Unit: ",
    name: "unit_code",
    addOptionError: errorOptions.codeInModal,
    defaultValue: data,
  },
];
