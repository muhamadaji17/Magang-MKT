export const inputAboutPattern = [
  {
    type: "editor",
    placeholder: "Description Id ...",
    name: "about_body_id",
    validation: { required: "Description Id is required" },
  },
  {
    type: "editor",
    placeholder: "Description En ...",
    name: "about_body_en",
    validation: { required: "Description En is required" },
  },
];

export const inputFilmPattern = [
  {
    label: "Film name",
    type: "text",
    placeholder: "Film name",
    name: "nama_film",
    validation: { required: "Film name is required" },
  },
  {
    type: "file",
    placeholder: "Insert image",
    name: "poster_film",
  },
  {
    label: "Synopsis Id",
    type: "text",
    placeholder: "Detail synopsis",
    name: "sinopsis_film_id",
    validation: { required: "Synopsis Id is required" },
  },
  {
    label: "Trailer Film",
    type: "text",
    placeholder: "Detail trailer film",
    name: "trailer_film",
    validation: { required: "Trailer film is required" },
  },
  {
    label: "Status Active",
    type: "select",
    placeholder: "Status",
    name: "status",
    option: [
      { value: true, label: "Active" },
      { value: false, label: "Not Active" },
    ],
    validation: { required: "Status is required" },
  },
];

export const inputOfficePattern = [
  {
    label: "Office name",
    type: "text",
    placeholder: "Office name",
    name: "office_name",
    validation: { required: "Office name is required" },
  },
  {
    label: "Address",
    type: "text",
    placeholder: "Address",
    name: "address",
    validation: { required: "Address is required" },
  },
  {
    label: "longitude",
    type: "text",
    placeholder: "longitude",
    name: "longitude",
    validation: { required: "Longitude is required" },
  },
  {
    label: "Latitude",
    type: "text",
    placeholder: "Latitude",
    name: "latitude",
    validation: { required: "Latitude is required" },
  },
  {
    label: "Facebook",
    type: "text",
    placeholder: "Insert Facebook",
    name: "fb",
    validation: { required: "Facebook is required" },
  },
  {
    label: "X",
    type: "text",
    placeholder: "Insert X",
    name: "x",
    validation: { required: "X is required" },
  },
  {
    label: "Youtube",
    type: "text",
    placeholder: "Insert YouTube",
    name: "yt",
    validation: { required: "yt is required" },
  },
  {
    label: "Instagram",
    type: "text",
    placeholder: "Insert Instagram",
    name: "ig",
    validation: { required: "Instagram is required" },
  },
  {
    label: "Status Active",
    type: "select",
    placeholder: "Status",
    name: "status",
    option: [
      { value: true, label: "Active" },
      { value: false, label: "Not Active" },
    ],
    validation: { required: "Status is required" },
  },
  {
    label: "ID City",
    type: "select",
    placeholder: "Id City",
    name: "id_city",
    option: [{ value: "name", label: "label" }],
    validation: { required: "Id City is required" },
  },
];

export const inputCityPattern = [
  {
    label: "City name",
    type: "text",
    placeholder: "City name",
    name: "city_name",
    validation: { required: "City name is required" },
  },
  {
    label: "City code",
    type: "text",
    placeholder: "City code",
    name: "city_code",
    validation: { required: "City code is required" },
  },
  {
    label: "Province code",
    type: "select",
    placeholder: "Province code",
    name: "id_province",
    option: [{ value: "1", label: "Aceh" }],
    validation: { required: "id province is required" },
  },
  {
    label: "Status Active",
    type: "select",
    placeholder: "Status",
    name: "status",
    option: [
      { value: true, label: "Active" },
      { value: false, label: "Not Active" },
    ],
    validation: { required: "Status is required" },
  },
];

export const inputProvincePattern = [
  {
    label: "Province name",
    type: "text",
    placeholder: "Province name",
    name: "province_name",
    validation: { required: "Province name is required" },
  },
  {
    label: "Province code",
    type: "text",
    placeholder: "Province code",
    name: "province_code",
    validation: { required: "Province code is required" },
  },
  {
    label: "Status",
    type: "select",
    placeholder: "Status",
    name: "status",
    option: [
      { value: true, label: "Active" },
      { value: false, label: "Not Active" },
    ],
    validation: { required: "Country Id is required" },
  },
  {
    label: "Country Id",
    type: "select",
    placeholder: "Country Id",
    name: "id_country",
    option: [{ value: "name", label: "Name" }],
    validation: { required: "Country Id is required" },
  },
];

export const inputCountryPattern = [
  {
    label: "Country name",
    type: "text",
    placeholder: "Country name",
    name: "country_name",
    validation: { required: "Country name is required" },
  },
  {
    label: "Country code",
    type: "text",
    placeholder: "Country code",
    name: "country_code",
    validation: {
      required: "Country code is required",
      maxLength: {
        value: 5,
        message: "Country code must be 5 characters",
      },
    },
  },
  {
    label: "Status",
    type: "select",
    placeholder: "Select status",
    name: "status",
    option: [
      { value: true, label: "Active" },
      { value: false, label: "Not Active" },
    ],
    validation: { required: "Status is required" },
  },
];

export const inputPostFilm = [
  {
    label: "Nama Film",
    type: "text",
    placeholder: "Insert film name",
    name: "nama_film",
    validation: { required: "Nama film is required" },
  },
  {
    label: "Poster Film",
    type: "file",
    placeholder: "Insert image",
    name: "poster_film",
  },
  {
    label: "Synopsis film Id",
    type: "textarea",
    placeholder: "Insert Synopsis Id",
    name: "sinopsis_film_id",
    validation: { required: "Sinopsis Id is required" },
  },
  {
    label: "Synopsis film En",
    type: "textarea",
    placeholder: "Insert Synopsis en",
    name: "sinopsis_film_en",
    validation: { required: "Sinopsis en is required" },
  },
  {
    label: "YouTube trailer link",
    type: "text",
    placeholder: "Insert youtube link",
    name: "trailer_film",
    validation: { required: "Link trailer is required" },
  },
  {
    label: "Status",
    type: "select",
    placeholder: "Select status",
    name: "status",
    option: [
      { value: true, label: "Active" },
      { value: false, label: "Not Active" },
    ],
    validation: { required: "Status is required" },
  },
];
