import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";
import { fetchOffice } from "@/services/office/officeService";

export const useOffice = () => {
  const [office, setOffice] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState(null);

  const {
    modalIsOpen,
    modalType,
    handleCloseModal,
    handleOpenModal,
    refresh,
    setRefresh,
    loading,
    token,
  } = useGlobalHook();

  const handleOpenEditModal = (officeId) => {
    setSelectedOffice(officeId);
    handleOpenModal("edit");
  };

  useEffect(() => {
    fetchOffice(token, { setOffice, setCityOptions });
  }, [refresh]);

  return {
    office,
    handleOpenModal,
    modalIsOpen,
    token,
    modalType,
    handleCloseModal,
    handleOpenEditModal,
    cityOptions,
    refresh,
    setRefresh,
    selectedOffice,
    loading,
  };
};
