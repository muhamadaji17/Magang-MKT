/** @format */

export const configTableFilms = [
  {
    title: "Poster",
    key: "poster_film",
    // type: "select",
    // placeholder: "Type File",
    // options: [
    //   { label: "All", value: "" },
    //   { label: "JPEG", value: "jpeg" },
    //   { label: "JPG", value: "jpg" },
    //   { label: "PNG", value: "png" },
    // ],
  },
  { title: "Title", key: "nama_film", type: "text" },
  { title: "Sinopsis", key: "sinopsis_film_id", type: "text" },
  { title: "Traier", key: "trailer_film", type: "text" },
  {
    title: "Status",
    key: "status",
    type: "select",
    placeholder: "Select Status",
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
];

export const configTableCountry = [
  { title: "Country Name", key: "country_name", type: "text" },
  { title: "Country Code", key: "country_code", type: "text" },
  { title: "Created By", key: "username", type: "text" },
  {
    title: "Status",
    key: "status",
    type: "select",
    placeholder: "Select Status",
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
];

export const configTableProvince = [
  { title: "Province Name", key: "province_name", type: "text" },
  { title: "Province Code", key: "province_code", type: "text" },
  { title: "Country Name", key: "country_name", type: "text" },
  { title: "Created By", key: "username", type: "text" },
  {
    title: "Status",
    key: "status",
    type: "select",
    placeholder: "Select Status",
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
];

export const configTableCity = [
  { title: "City Name", key: "city_name", type: "text" },
  { title: "City Code", key: "city_code", type: "text" },
  { title: "Province Name", key: "province_name", type: "text" },
  { title: "Created By", key: "username", type: "text" },
  {
    title: "Status",
    key: "status",
    type: "select",
    placeholder: "Select Status",
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
];

export const configTableOffice = [
  { title: "Office Name", key: "office_name", type: "text" },
  { title: "City Name", key: "city_name", type: "text" },
  { title: "Created By", key: "username", type: "text" },
  { title: "Instagram", key: "ig", type: "text" },
  { title: "Facebook", key: "fb", type: "text" },
  { title: "X", key: "x", type: "text" },
  { title: "Youtube", key: "yt", type: "text" },
  { title: "Address", key: "address", type: "text" },
  {
    title: "Status",
    key: "status",
    type: "select",
    placeholder: "Select Status",
    options: [
      { label: "Active", value: true },
      { label: "Inactive", value: false },
    ],
  },
];

export const configTableUser = [
  {
    title: "Username",
    key: "user_name",
    type: "text",
  },
  {
    title: "Phone",
    key: "user_phone",
    type: "number",
  },
];

export const dayNames = [
  { title: "Sunday" },
  { title: "Monday" },
  { title: "Tuesday" },
  { title: "Wednesday" },
  { title: "Thursday" },
  { title: "Friday" },
  { title: "Saturday" },
];
