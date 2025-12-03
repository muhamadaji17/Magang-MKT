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
  // { title: "Traier", key: "trailer_film", type: "text" },
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
  // { title: "Instagram", key: "ig", type: "text" },
  // { title: "Facebook", key: "fb", type: "text" },
  // { title: "X", key: "x", type: "text" },
  // { title: "Youtube", key: "yt", type: "text" },
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
export const configTableContact = [
  { title: "Contact Name", key: "contact_name" },
  { title: "Contact URL", key: "contact_url", type: "text" },
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
export const configTableCategoryContact = [
  { title: "Logo", key: "contact_sosmed_logo" },
  { title: "Contact Type", key: "contact_sosmed_name", type: "text" },
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
  {
    title: "Role",
    key: ["roles", "role_name"],
  },
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

export const configTableRole = [
  {
    title: "Role Name",
    key: "role_name",
    type: "text",
  },
  {
    title: "Priority",
    key: "priority",
    type: "number",
  },
  // {
  //   title: "Status",
  //   key: "status",
  //   type: "select",
  //   placeholder: "Select Status",
  //   options: [
  //     { label: "Active", value: true },
  //     { label: "Inactive", value: false },
  //   ],
  // },
];

export const configTableArticleCategories = [
  {
    title: "Category Name EN (English)",
    key: "article_category_name_en",
    type: "text",
  },
  {
    title: "Category Name ID (Bahasa)",
    key: "article_category_name_id",
    type: "text",
  },
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

export const configTableRating = [
  {
    title: "Rating",
    key: "nama_rating",
    type: "text",
  },
  {
    title: "Code Rating",
    key: "kode_rating",
    type: "text",
  },
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

export const configTableSubscribers = [
  {
    title: "Email",
    key: "email",
    type: "text",
  },
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

export const dayNames = [
  { title: "Sunday" },
  { title: "Monday" },
  { title: "Tuesday" },
  { title: "Wednesday" },
  { title: "Thursday" },
  { title: "Friday" },
  { title: "Saturday" },
];
