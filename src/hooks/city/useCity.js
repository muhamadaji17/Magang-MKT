import { useEffect, useState } from "react";
import useGlobalHook from "@/hooks/useGlobalHook";
import { fetchCity, getCityById } from "@/services/city/cityService";

export const useCity = () => {
  const [city, setCity] = useState([]);
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    refresh,
    setRefresh,
    handleCloseModal,
    handleOpenModal,
    modalIsOpen,
    modalType,
    token,
  } = useGlobalHook();

  const handleOpenEditModal = (cityId) => {
    setSelectedCity(cityId);
    handleOpenModal("edit");
  };

  useEffect(() => {
    if (searchQuery) {
      getCityById(searchQuery, { token, setCity });
    } else {
      fetchCity(token, {
        setCity,
        setProvinceOptions,
      });
    }
  }, [refresh, searchQuery, token]);

  return {
    city,
    modalIsOpen,
    handleCloseModal,
    handleOpenModal,
    handleOpenEditModal,
    modalType,
    provinceOptions,
    selectedCity,
    refresh,
    setRefresh,
    token,
    searchQuery,
    setSearchQuery,
  };
};
