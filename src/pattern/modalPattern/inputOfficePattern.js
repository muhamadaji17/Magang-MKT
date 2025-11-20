/** @format */

import { errorOptions } from "../error";

export const inputAddOffice = (options) => [
  {
    labelText: "Office Name",
    name: "office_name",
    type: "text",
    optionError: errorOptions.name_office,
  },

  {
    name: "id_city",
    type: "select",
    labelText: "Name City",
    optionDisabledText: "Select City",
    options,
    grid: 12,
    optionError: errorOptions.select_city,
  },
  {
    labelText: "Latitude",
    name: "latitude",
    grid: 6,
    type: "number",
    optionError: errorOptions.latitude,
  },
  {
    labelText: "Longitude",
    name: "longitude",
    grid: 6,
    type: "number",
    optionError: errorOptions.longitute,
  },
  {
    type: "textarea",
    labelText: "Address",
    name: "address",
    optionError: errorOptions.adress,
    rows: 5,
  },
];

export const inputEditOffice = (defaultValues, options) => {
  return [
    {
      labelText: "Office Name",
      name: "office_name",
      type: "text",
      optionError: errorOptions.name_office,
      defaultValue: defaultValues.office_name,
    },

    {
      labelText: "Latitude",
      name: "latitude",
      grid: 6,
      type: "text",
      optionError: errorOptions.latitude,
      defaultValue: defaultValues.latitude,
    },
    {
      labelText: "Longitude",
      name: "longitude",
      grid: 6,
      type: "text",
      optionError: errorOptions.longitute,
      defaultValue: defaultValues.longitude,
    },

    {
      name: "id_city",
      type: "select",
      grid: 6,
      labelText: "Name City",
      optionDisabledText: "Select City",
      options,
      optionError: errorOptions.select_city,
      defaultValue: defaultValues.id_city,
    },

    {
      name: "status",
      type: "select",
      labelText: "Status",
      optionDisabledText: "Select Status",
      defaultValue: defaultValues.status,
      grid: 6,
      options: [
        { label: "Active", value: true },
        { label: "Inactive", value: false },
      ],
    },
    {
      type: "textarea",
      labelText: "Address",
      name: "address",
      optionError: errorOptions.adress,
      defaultValue: defaultValues.address,
      rows: 5,
    },
  ];
};
