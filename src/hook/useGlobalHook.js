import { useState } from "react";

export const useGlobalHook = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [datas, setDatas] = useState(null);
  const [updateData, setUpdateData] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showModalWithId, setShowModalWithId] = useState(false);
  const [getDataColumn, setGetDataColumn] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [typeModal, setTypeModal] = useState("");

  return {
    loading,
    setLoading,
    showPassword,
    setShowPassword,
    datas,
    setDatas,
    showAddModal,
    setShowAddModal,
    updateData,
    setUpdateData,
    showModalWithId,
    setShowModalWithId,
    getDataColumn,
    setGetDataColumn,
    searchQuery,
    setSearchQuery,
    disabledButton,
    setDisabledButton,
    typeModal,
    setTypeModal,
  };
};
