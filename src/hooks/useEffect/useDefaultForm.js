import { useEffect } from "react";

const useDefaultForm = (dataForm, inputValue, setDisableDefaultValue) => {
    useEffect(() => {
        if (!dataForm) return;

        const disabled = dataForm.every((data) => {
            if (!data.defaultValue) return false;
            let currentValue = inputValue?.[data.name] ?? "";
            let defaultValue = data.defaultValue?.[data.name] ?? "";

            if (
                data.name === "start_date_banner" ||
                data.name === "end_date_banner"
            ) {
                const currentDate = new Date(currentValue);
                const defaultDate = new Date(defaultValue);
                currentValue = isNaN(currentDate.getTime())
                    ? ""
                    : currentDate.toISOString().split("T")[0];
                defaultValue = isNaN(defaultDate.getTime())
                    ? ""
                    : defaultDate.toISOString().split("T")[0];
            } else if (data.name === "banner_img") {
                const currentImage = currentValue;
                const defaultImage = `http://10.20.0.25:3001/v1/api/public/image/banner/${defaultValue}`;
                currentValue = currentValue.startsWith("http")
                    ? currentImage
                    : "";
                defaultValue = defaultImage;
            } else {
                currentValue = currentValue || "";
                defaultValue = defaultValue || "";
            }
            return currentValue === defaultValue;
        });

        setDisableDefaultValue(disabled);
    }, [inputValue, dataForm, setDisableDefaultValue]);
};

export default useDefaultForm;
