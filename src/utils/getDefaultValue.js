const getDefaultValue = (dataForm) => {
    if (!dataForm) return {};
    return dataForm.reduce((acc, data) => {
        if (
            data.name === "start_date_banner" ||
            data.name === "end_date_banner"
        ) {
            const date = new Date(data.defaultValue);
            acc[data.name] = isNaN(date.getTime())
                ? ""
                : date.toISOString().split("T")[0];
        } else if (data.name === "status") {
            acc[data.name] =
                data.defaultValue === "" ? false : Boolean(data.defaultValue);
        } else {
            acc[data.name] = data.defaultValue || "";
        }
        return acc;
    }, {});
};

export default getDefaultValue;
