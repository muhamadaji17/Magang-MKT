import { errorOptions } from "../PatternError";

export const inputAddUnit = [
  {
    placeholder: "Pilih Departemen",
    type: "select",
    title: "Nama Departemen: ",
    name: "id_departement",
    id: "id_departement",
    addOptionError: errorOptions.selectInput,
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

export const inputEditUnit = (defaultValue) => [
  {
    placeholder: "Pilih Departemen",
    type: "select",
    title: "Nama Departemen: ",
    name: "id_departement",
    id: "id_departement",
    addOptionError: errorOptions.selectInput,
    defaultValue: defaultValue?.id_departement,
  },
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Nama Unit: ",
    name: "nama_unit",
    addOptionError: errorOptions.nameInModal,
    defaultValue: defaultValue?.nama_unit,
  },
  {
    placeholder: "Teknologi Informasi",
    type: "text",
    title: "Code Unit: ",
    name: "unit_code",
    addOptionError: errorOptions.codeInModal,
    defaultValue: defaultValue?.unit_code,
  },
];
