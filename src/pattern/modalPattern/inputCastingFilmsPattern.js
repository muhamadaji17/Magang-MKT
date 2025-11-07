/** @format */

import { errorOptions } from "../error";

export const inputAddCastingFilms = (data) => [
  {
    labelText: "Nama Artis",
    name: "nama_casting_film",
    type: "text",
    optionError: errorOptions.nama_casting_film,
    grid: 6,
  },
  {
    labelText: "Pemeran",
    name: "sebagai_casting_film",
    type: "text",
    optionError: errorOptions.sebagai_casting_film,
    grid: 6,
  },
  {
    labelText: "Nama Sosial Media",
    name: "sosmed_name_casting_film",
    type: "text",
    optionError: errorOptions.sosmed_name_casting_film,
    grid: 6,
  },
  {
    labelText: "Link Sosial Media",
    name: "sosmed_url_casting_film",
    type: "text",
    optionError: errorOptions.sosmed_url_casting_film,
    grid: 6,
  },
  {
    labelText: "Deskripsi Artis",
    name: "sinopsis_casting_film_id",
    type: "textarea",
    optionError: errorOptions.sinopsis_casting_film_id,
    rows: 5,
  },

  {
    labelText: "Poster Artis",
    name: "poster_casting_film",
    type: "file",
    optionError: errorOptions.img,
  },
  {
    name: "id_film",
    type: "hidden",
    value: data.id_film,
    grid: 12,
  },
];

export const inputEditCastingFilms = (datasDefault) => [
  {
    labelText: "Title Film",
    name: "nama_film",
    type: "text",
    defaultValue: datasDefault.nama_film,
    optionError: errorOptions.title_film,
  },
  {
    labelText: "Sinopsis Film",
    name: "sinopsis_film_id",
    type: "text",
    defaultValue: datasDefault.sinopsis_film_id,
    optionError: errorOptions.sinopsis_film,
  },
  {
    labelText: "Trailer Film",
    name: "trailer_film",
    type: "text",
    defaultValue: datasDefault.trailer_film,
    optionError: errorOptions.url,
  },
  {
    labelText: "Poster Film",
    name: "poster_film",
    type: "file",
    tableImg: "films",
    defaultValue: datasDefault.poster_film,
  },
  {
    name: "status",
    type: "select",
    labelText: "Status",
    optionDisabledText: "Select Status",
    defaultValue: datasDefault.status,
    grid: 6,
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
];
