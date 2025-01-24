import { useState } from "react";

export const useGlobalHook = () => {
  const [loadingButton, setLoadingButton] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return {
    loadingButton,
    setLoadingButton,
    showPassword,
    setShowPassword,
  };
};
