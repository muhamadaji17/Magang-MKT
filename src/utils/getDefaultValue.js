const getDefaultValue = (dataForm) => {
    if (!dataForm) return {};
    return dataForm.reduce((acc, data) => {
        if (
            data.name === "start_date_banner" ||
            data.name === "end_date_banner"
        ) {
            const date = new Date(data.defaultValue?.[data.name]);
            acc[data.name] = isNaN(date.getTime())
                ? ""
                : date.toISOString().split("T")[0];
        } else if (data.name === "banner_img") {
            acc.banner_img = `http://10.20.0.25:3001/v1/api/public/image/banner/${data.defaultValue}`;
        } else {
            acc[data.name] = data.defaultValue?.[data.name] || "";
        }
        return acc;
    }, {});
};

export default getDefaultValue;
