import { errorOptions } from "../PatternError";

export const inputAddPosition = [
  {
    placeholder: "Staff",
    type: "text",
    title: "Nama Jabatan: ",
    name: "nama_jabatan",
    addOptionError: errorOptions.nameInModal,
  },
  {
    placeholder: "0X12B",
    type: "text",
    title: "Kode Jabatan: ",
    name: "jabatan_code",
    addOptionError: errorOptions.codeInModal,
  },
  {
    placeholder: "0X12B",
    type: "number",
    title: "Priority: ",
    name: "priority",
    addOptionError: errorOptions.priority,
  },
];

export const inputEditPosition = (data) => [
  {
    placeholder: "Staff",
    type: "text",
    title: "Nama Jabatan: ",
    name: "nama_jabatan",
    addOptionError: errorOptions.nameInModal,
    defaultValue: data?.nama_jabatan,
  },
  {
    placeholder: "0X12B",
    type: "text",
    title: "Kode Jabatan: ",
    name: "jabatan_code",
    addOptionError: errorOptions.codeInModal,
    defaultValue: data?.jabatan_code,
  },
  {
    placeholder: "0X12B",
    type: "number",
    title: "Priority: ",
    name: "priority",
    addOptionError: errorOptions.priority,
    defaultValue: data?.priority,
  },
];
