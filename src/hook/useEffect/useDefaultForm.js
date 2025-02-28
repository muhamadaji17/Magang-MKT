import { useEffect } from 'react';

const useDefaultForm = (dataForm, inputValue, setDisableDefaultValue) => {
    useEffect(() => {
        if (!dataForm) return;

        const disabled = dataForm.every((data) => {
            if (!data.defaultValue) return false;
            const currentValue = inputValue?.[data.name] ?? '';
            const defaultValue = data.defaultValue?.[data.name] ?? '';
            return currentValue === defaultValue;
        });

        setDisableDefaultValue(disabled);
    }, [inputValue, dataForm, setDisableDefaultValue]);
};

export default useDefaultForm;
