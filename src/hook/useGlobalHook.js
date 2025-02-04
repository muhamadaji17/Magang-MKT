import { useState } from 'react';

export const useGlobalHook = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loadingButton, setLoadingButton] = useState(false);

    return {
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        loadingButton,
        setLoadingButton,
    };
};
