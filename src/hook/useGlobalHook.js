import { useState } from "react";

export const useGlobalHook = () => {
  const [loadingButton, setLoadingButton] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [datas, setDatas] = useState(null);
  const [updateData, setUpdateData] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return {
    loadingButton,
    setLoadingButton,
    showPassword,
    setShowPassword,
    datas,
    setDatas,
    showAddModal,
    setShowAddModal,
    updateData,
    setUpdateData,
    showEditModal,
    setShowEditModal,
  };
};
