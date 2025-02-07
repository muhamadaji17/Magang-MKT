export const disabledButtonIfNoChange = (
  dataForm,
  inputValues,
  setDisabled
) => {
  const isDisabled = dataForm.every((data) => {
    if (!data.defaultValue) return false;
    const defaultValue = data.defaultValue?.[data.name] || "";
    const currentValue = inputValues[data.name] || "";

    return defaultValue === currentValue;
  });

  setDisabled(isDisabled);
};
