import errorOptions from "../errorOptions";

export const inputCountry = [
    {
        jenisInputan: "input",
        type: "text",
        title: "Country Code",
        name: "country_code",
        placeholder: "your country code",
        error: "country_code",
        addOptionError: errorOptions.country_code,
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "text",
        title: "Country Name",
        name: "country_name",
        placeholder: "your country name",
        error: "country_name",
        addOptionError: errorOptions.country_name,
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "checkbox",
        title: "Click to Activate",
        name: "status",
        grid: 12,
    },
];

export const inputEditCountry = (data) => [
    {
        jenisInputan: "hidden",
        type: "text",
        name: "id",
        defaultValue: data.id,
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "text",
        title: "Country Code",
        name: "country_code",
        placeholder: "your country code",
        error: "country_code",
        addOptionError: errorOptions.country_code,
        defaultValue: data.country_code,
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "text",
        title: "Country Name",
        name: "country_name",
        placeholder: "your country name",
        error: "country_name",
        addOptionError: errorOptions.country_name,
        defaultValue: data.country_name,
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "checkbox",
        title: "Click to Activate",
        name: "status",
        defaultValue: data.status,
        grid: 12,
    },
];
