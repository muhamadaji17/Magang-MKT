export const useDefaultValue = (dataForm) => {
  const result = dataForm.reduce((acc, data) => {
    acc[data.name] = data.defaultValue?.[data.name] || "";
    return acc;
  }, {});

  return result;
};
