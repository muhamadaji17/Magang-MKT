import { errorOptions } from "../error";

export const inputAddCountry = [
  {
    labelText: "Country Name",
    name: "country_name",
    type: "text",
    optionError: errorOptions.name_country,
  },
  {
    labelText: "Country Code",
    name: "country_code",
    type: "text",
    optionError: errorOptions.code_country,
  },
];

export const inputEditCountry = (defaultValues) => {
  return [
    {
      labelText: "Country Name",
      name: "country_name",
      type: "text",
      defaultValue: defaultValues.country_name,
      optionError: errorOptions.name_country,
      grid: 6,
    },
    {
      labelText: "Country Code",
      name: "country_code",
      type: "text",
      defaultValue: defaultValues.country_code,
      optionError: errorOptions.code_country,
      grid: 6,
    },
    {
      name: "status",
      type: "select",
      labelText: "Status",
      optionDisabledText: "Select Status",
      defaultValue: defaultValues.status,

      options: [
        { label: "Active", value: true },
        { label: "Inactive", value: false },
      ],
    },
  ];
};
