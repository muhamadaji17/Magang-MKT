import { useEffect } from "react";

const useDefaultForm = (dataForm, inputValue, setDisableDefaultValue) => {
    useEffect(() => {
        if (!dataForm) return;

        const disabled = dataForm.every((data) => {
            let currentValue = inputValue?.[data.name] ?? "";
            let defaultValue = data.defaultValue ?? "";

            if (data.name === "status" && data.defaultValue === "") {
                defaultValue = false;
            }

            if (data.name === "status" && currentValue === "") {
                currentValue = false;
            }

            if (
                data.name === "start_date_banner" ||
                data.name === "end_date_banner"
            ) {
                const defaultDate = new Date(defaultValue);
                defaultValue = isNaN(defaultDate.getTime())
                    ? ""
                    : defaultDate.toISOString().split("T")[0];
            }

            if (data.name !== "status") {
                currentValue = String(currentValue);
                defaultValue = String(defaultValue);
            } else {
                currentValue = Boolean(currentValue);
                defaultValue = Boolean(defaultValue);
            }

            return currentValue === defaultValue;
        });

        setDisableDefaultValue(disabled);
    }, [inputValue, dataForm, setDisableDefaultValue]);
};

export default useDefaultForm;
