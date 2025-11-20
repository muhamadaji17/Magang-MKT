import { errorOptions } from "../error";

export const inputAddCity = (options) => [
  {
    labelText: "City Name",
    name: "city_name",
    type: "text",
    optionError: errorOptions.name_city,
  },
  {
    labelText: "Province Code",
    name: "city_code",
    type: "text",
    optionError: errorOptions.code_city,
  },
  {
    name: "id_province",
    type: "select",
    labelText: "Name Province",
    optionDisabledText: "Select Province",
    options,
    optionError: errorOptions.select_province,
  },
];

export const inputEditCity = (defaultValues, options) => {
  return [
    {
      labelText: "City Name",
      name: "city_name",
      type: "text",
      defaultValue: defaultValues.city_name,
      optionError: errorOptions.name_city,
    },
    {
      labelText: "City Code",
      name: "city_code",
      type: "text",
      defaultValue: defaultValues.city_code,
      optionError: errorOptions.code_city,
    },
    {
      name: "id_province",
      type: "select",
      labelText: "Name Province",
      optionDisabledText: "Select Province",
      defaultValue: defaultValues.id_province,
      options,
      grid: 6,
      optionError: errorOptions.select_province,
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
  ];
};
