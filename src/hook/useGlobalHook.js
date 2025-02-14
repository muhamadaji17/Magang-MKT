import { useState } from "react";

export const useGlobalHook = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [datas, setDatas] = useState([]);
  const [updateData, setUpdateData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalWithId, setShowModalWithId] = useState(false);
  const [getDataColumn, setGetDataColumn] = useState({});
  const [searchQuery, setSearchQuery] = useState({});
  const [disabledButton, setDisabledButton] = useState(false);
  const [typeModal, setTypeModal] = useState("");

  return {
    loading,
    setLoading,
    showPassword,
    setShowPassword,
    datas,
    setDatas,
    showModal,
    setShowModal,
    showModalWithId,
    setShowModalWithId,
    updateData,
    setUpdateData,
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
