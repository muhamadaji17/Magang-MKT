import { errorOptions } from "../error";

export const inputAddRating = [
  {
    labelText: "Rating",
    name: "nama_rating",
    type: "text",
    optionError: errorOptions.rating_name,
  },
  {
    labelText: "Code Rating",
    name: "kode_rating",
    type: "text",
    optionError: errorOptions.code_rating,
  },
];

export const inputEditRating = (defaultValue) => [
  {
    labelText: "Rating",
    name: "nama_rating",
    type: "text",
    optionError: errorOptions.rating_name,
    defaultValue: defaultValue.nama_rating,
  },
  {
    labelText: "Code Rating",
    name: "kode_rating",
    type: "text",
    optionError: errorOptions.code_rating,
    defaultValue: defaultValue.kode_rating,
  },
];
