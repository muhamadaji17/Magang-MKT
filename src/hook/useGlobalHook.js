import { useState } from "react";

export const useGlobalHook = () => {
  const [loadingButton, setLoadingButton] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [datas, setDatas] = useState(null);

  return {
    loadingButton,
    setLoadingButton,
    showPassword,
    setShowPassword,
    datas,
    setDatas,
  };
};
