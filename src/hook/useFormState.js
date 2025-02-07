import { useEffect } from 'react';

export function useFormState(dataForm, inputValue, setDisableDefaultValue) {
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
}
