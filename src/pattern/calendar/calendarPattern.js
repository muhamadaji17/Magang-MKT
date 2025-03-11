export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Warna event
export const colorEvent = [
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-red-300",
];

export const inputEditBanner = [
  {
    label: "Title",
    type: "text",
    placeholder: "Insert title",
    name: "banner_name",
    validation: { required: "Title is required" },
  },
  {
    label: "Start Date Banner",
    type: "date",
    placeholder: "Insert start date",
    name: "start_date_banner",
    validation: { required: "Start date banner is required" },
  },
  {
    label: "End Date Baner",
    type: "date",
    placeholder: "Insert end date",
    name: "end_date_banner",
    validation: { required: "End date banner is required" },
  },
  {
    label: "Banner Image",
    type: "file",
    placeholder: "Insert image",
    name: "banner_img",
  },
  {
    label: "Select status",
    type: "select",
    placeholder: "Insert status",
    name: "status",
    option: [
      { value: true, label: "Active" },
      { value: false, label: "Not Active" },
    ],
    validation: { required: "Status is required" },
  },
];

export const inputPostBanner = [
  {
    label: "Title",
    type: "text",
    placeholder: "Insert title",
    name: "banner_name",
    validation: { required: "Title is required" },
  },
  {
    label: "Banner Image",
    type: "file",
    placeholder: "Insert image",
    name: "banner_img",
  },
  {
    label: "Start Date Banner",
    type: "date",
    placeholder: "Insert start date",
    name: "start_date_banner",
    validation: { required: "Start date banner is required" },
  },
  {
    label: "End Date Baner",
    type: "date",
    placeholder: "Insert end date",
    name: "end_date_banner",
    validation: { required: "End date banner is required" },
  },
  {
    label: "Select status",
    type: "select",
    placeholder: "Insert status",
    name: "status",
    option: [
      { value: true, label: "Active" },
      { value: false, label: "Not Active" },
    ],
    validation: { required: "Status is required" },
  },
];
