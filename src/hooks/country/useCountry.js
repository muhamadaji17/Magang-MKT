import {
  deleteCountry,
  fetchCountry,
  postCountry,
  updateCountry,
} from "@/services/country/countryService";
import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";
import { handleSubmit } from "@/pattern/handleSubmit";

export const useCountry = () => {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const {
    handleCloseModal,
    modalIsOpen,
    handleOpenModal,
    refresh,
    setRefresh,
    modalType,
    token,
  } = useGlobalHook();

  const handleOpenEditModal = (countryId) => {
    setSelectedCountry(countryId);
    handleOpenModal("edit");
  };

  useEffect(() => {
    fetchCountry(token, { setCountry, setRefresh });
  }, [refresh]);

  return {
    country,
    handleCloseModal,
    handleOpenModal,
    modalIsOpen,
    handleOpenEditModal,
    modalType,
    token,
    refresh,
    setRefresh,
    selectedCountry,
  };
};
