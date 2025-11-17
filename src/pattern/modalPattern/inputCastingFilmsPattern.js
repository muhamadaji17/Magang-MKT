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
    labelText: "Sebagai",
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
    // optionError: errorOptions.sosmed_url_casting_film,
    grid: 6,
  },
  {
    labelText: "Deskripsi Artis ID",
    name: "sinopsis_casting_film_id",
    type: "textarea",
    // optionError: errorOptions.sinopsis_casting_film_id,
    rows: 5,
    grid: 6,
  },
  {
    labelText: "Deskripsi Artis en",
    name: "sinopsis_casting_film_en",
    type: "textarea",
    optionError: errorOptions.sinopsis_casting_film_en,
    rows: 5,
    grid: 6,
  },
  {
    name: "artis_kategori",
    type: "select",
    labelText: "is_main_cast",
    optionDisabledText: "Select is show is_main_cast",
    options: [
      {
        label: "Main Cast",
        value: "main_cast",
      },
      {
        label: "Cast",
        value: "cast",
      },
    ],
    grid: 12,
    optionError: errorOptions.artis_kategori,
  },

  {
    labelText: "Poster Artis",
    name: "poster_casting_film",
    type: "file",
    // optionError: errorOptions.img,
  },
  {
    name: "id_film",
    type: "hidden",
    value: data.id_film,
    grid: 4,
  },
  {
    name: "status",
    type: "hidden",
    value: true,
    grid: 4,
  },
  {
    name: "nama_film",
    type: "hidden",
    value: data.nama_film,
    grid: 4,
  },
];

export const inputEditCastingFilms = (datasDefault, dataDetail) => [
  {
    labelText: "Nama Artis",
    name: "nama_casting_film",
    type: "text",
    defaultValue: datasDefault.nama_casting_film,
    optionError: errorOptions.nama_casting_film,
    grid: 6,
  },
  {
    labelText: "Sebagai",
    name: "sebagai_casting_film",
    type: "text",
    optionError: errorOptions.sebagai_casting_film,
    defaultValue: datasDefault.sebagai_casting_film,
    grid: 6,
  },
  {
    labelText: "Nama Sosial Media",
    name: "sosmed_name_casting_film",
    type: "text",
    optionError: errorOptions.sosmed_name_casting_film,
    defaultValue: datasDefault.sosmed_name_casting_film,
    grid: 6,
  },
  {
    labelText: "Link Sosial Media",
    name: "sosmed_url_casting_film",
    type: "text",
    defaultValue: datasDefault.sosmed_url_casting_film,
    // optionError: errorOptions.sosmed_url_casting_film,
    grid: 6,
  },
  {
    labelText: "Deskripsi Artis ID",
    name: "sinopsis_casting_film_id",
    type: "textarea",
    defaultValue: datasDefault.sinopsis_casting_film_id,
    // optionError: errorOptions.sinopsis_casting_film_id,
    rows: 5,
    grid: 6,
  },
  {
    labelText: "Deskripsi Artis en",
    name: "sinopsis_casting_film_en",
    type: "textarea",
    optionError: errorOptions.sinopsis_casting_film_en,
    defaultValue: datasDefault.sinopsis_casting_film_en,
    rows: 5,
    grid: 6,
  },
  {
    name: "artis_kategori",
    type: "select",
    // labelText: "is_main_cast",
    optionDisabledText: "Select is show is_main_cast",
    defaultValue: datasDefault.artis_kategori,
    options: [
      {
        label: "Main Cast",
        value: "main_cast",
      },
      {
        label: "Cast",
        value: "cast",
      },
    ],
    grid: 12,
    optionError: errorOptions.artis_kategori,
  },

  {
    labelText: "Poster Artis",
    name: "poster_casting_film",
    type: "file",
    defaultValue: `${datasDefault.poster_casting_film}`,
    // optionError: errorOptions.img,
  },
  {
    name: "id_film",
    type: "hidden",
    value: datasDefault.id_film,
    defaultValue: datasDefault.id_film,
    grid: 4,
  },
  {
    name: "id",
    type: "hidden",
    value: datasDefault.id_casting_film,
    defaultValue: datasDefault.id_casting_film,
    grid: 4,
  },
  {
    name: "status",
    type: "hidden",
    value: true,
    grid: 4,
  },
  {
    name: "nama_film",
    type: "hidden",
    value: dataDetail.nama_film,
    defaultValue: dataDetail.nama_film,
    grid: 4,
  },
];

export const typeTabsCastingFilms = [
  {
    id: "cast",
    title: "Cast",
  },
  {
    id: "main_cast",
    title: "Main Cast",
  },
];
