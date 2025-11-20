import { errorOptions } from "../error";

export const inputAddProvince = (options) => [
  {
    labelText: "Province Name",
    name: "province_name",
    type: "text",
    grid: 6,
    optionError: errorOptions.name_province,
  },
  {
    labelText: "Province Code",
    name: "province_code",
    type: "text",
    grid: 6,
    optionError: errorOptions.code_province,
  },
  {
    name: "id_country",
    type: "select",
    labelText: "Name Country",
    optionDisabledText: "Select Country",
    options,
    grid: 12,
    optionError: errorOptions.select_country,
  },
];

export const inputEditProvince = (defaultValues, options) => {
  return [
    {
      labelText: "Province Name",
      name: "province_name",
      type: "text",
      defaultValue: defaultValues.province_name,
      optionError: errorOptions.name_province,
      grid: 6,
    },
    {
      labelText: "Province Code",
      name: "province_code",
      type: "text",
      defaultValue: defaultValues.province_code,
      optionError: errorOptions.code_province,
      grid: 6,
    },
    {
      name: "id_country",
      type: "select",
      labelText: "Name Country",
      optionDisabledText: "Select Country",
      defaultValue: defaultValues.country_id,
      options,
      grid: 6,
      optionError: errorOptions.select_country,
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
