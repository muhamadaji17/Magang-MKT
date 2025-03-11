import useLogin from "@/store/useLogin";
import { useState } from "react";

const useGlobalHook = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalType, setModalType] = useState("");
  const { token } = useLogin();

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleOpenModal = (type) => {
    setModalType(type);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setModalType("");
  };

  return {
    handleShowPassword,
    showPassword,
    refresh,
    setRefresh,
    modalIsOpen,
    handleOpenModal,
    modalType,
    handleCloseModal,
    loading,
    setLoading,
    token,
  };
};

export default useGlobalHook;
