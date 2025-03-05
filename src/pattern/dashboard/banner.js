import errorOptions from "../errorOptions";

export const inputBanner = [
    {
        jenisInputan: "input",
        type: "text",
        title: "Banner Name",
        name: "banner_name",
        placeholder: "your banner name",
        error: "banner_name",
        addOptionError: errorOptions.banner_name,
    },
    {
        jenisInputan: "input",
        type: "file",
        title: "Banner Image",
        name: "banner_img",
        error: "banner_img",
        addOptionError: errorOptions.banner_img,
    },
    {
        jenisInputan: "input",
        type: "date",
        title: "Start Date",
        name: "start_date_banner",
        error: "start_date_banner",
        addOptionError: errorOptions.start_date_banner,
    },
    {
        jenisInputan: "input",
        type: "date",
        title: "End Date",
        name: "end_date_banner",
        error: "end_date_banner",
        addOptionError: errorOptions.end_date_banner,
    },
    {
        jenisInputan: "input",
        type: "checkbox",
        title: "Click to Activate",
        name: "status",
    },
];

export const inputEditBanner = (data) => {
    return [
        {
            jenisInputan: "input",
            type: "text",
            title: "Banner Name",
            name: "banner_name",
            placeholder: "your banner name",
            error: "banner_name",
            addOptionError: errorOptions.banner_name,
            defaultValue: data,
        },
        {
            jenisInputan: "input",
            type: "file",
            title: "Banner Image",
            name: "banner_img",
            error: "banner_img",
            addOptionError: errorOptions.banner_img,
            defaultValue: data,
        },
        {
            jenisInputan: "input",
            type: "date",
            title: "Start Date",
            name: "start_date_banner",
            error: "start_date_banner",
            addOptionError: errorOptions.start_date_banner,
            defaultValue: data,
        },
        {
            jenisInputan: "input",
            type: "date",
            title: "End Date",
            name: "end_date_banner",
            error: "end_date_banner",
            addOptionError: errorOptions.end_date_banner,
            defaultValue: data,
        },
        {
            jenisInputan: "input",
            type: "checkbox",
            title: "Click to Activate",
            name: "status",
            defaultValue: data,
        },
    ];
};
