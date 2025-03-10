import errorOptions from "../errorOptions";

export const inputProvince = (datas) => [
    {
        jenisInputan: "input",
        type: "select",
        title: "Country",
        options: datas.map((data) => ({
            value: data.id,
            label: data.country_name,
        })),
        name: "id_country",
        error: "id_country",
        addOptionError: errorOptions.id_country,
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "text",
        title: "Province Code",
        name: "province_code",
        placeholder: "your province code",
        error: "province_code",
        addOptionError: errorOptions.province_code,
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "text",
        title: "Province Name",
        name: "province_name",
        placeholder: "your province name",
        error: "province_name",
        addOptionError: errorOptions.province_name,
        grid: 12,
    },
];

export const inputEditProvince = (selectData, defaultValue) => [
    {
        jenisInputan: "hidden",
        type: "text",
        name: "id",
        defaultValue: defaultValue.id,
        grid: 12,
    },
    {
        jenisInputan: "select",
        title: "Country",
        options: selectData.map((data) => ({
            label: data.id_country,
            value: data.country_name,
        })),
        name: "id_country",
        error: "id_country",
        addOptionError: errorOptions.id_country,
        defaultValue: defaultValue.id_country,
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "text",
        title: "Province Code",
        name: "province_code",
        placeholder: "your province code",
        error: "province_code",
        addOptionError: errorOptions.province_code,
        defaultValue: defaultValue.province_code,
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "text",
        title: "Province Name",
        name: "province_name",
        placeholder: "your province name",
        error: "province_name",
        addOptionError: errorOptions.province_name,
        defaultValue: defaultValue.province_name,
        grid: 12,
    },
];
