const getDefaultValue = (dataForm) => {
    if (!dataForm) return {};
    return dataForm.reduce((acc, data) => {
        acc[data.name] = data.defaultValue?.[data.name] || '';
        return acc;
    }, {});
};

export default getDefaultValue;
