import {
  fetchCountry,
  getCountryByQuery,
} from "@/services/country/countryService";
import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";

export const useCountry = () => {
  const [country, setCountry] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});
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
    const fetchData = () => {
      if (Object.values(searchQuery).some((value) => value)) {
        getCountryByQuery(searchQuery, { token, setCountry });
      } else {
        fetchCountry(token, { setCountry, setRefresh });
      }
    };

    fetchData();
  }, [refresh, searchQuery, token]);

  return {
    country,
    setCountry,
    handleCloseModal,
    handleOpenModal,
    modalIsOpen,
    handleOpenEditModal,
    modalType,
    token,
    refresh,
    setRefresh,
    selectedCountry,
    searchQuery,
    setSearchQuery, // Function untuk set pencarian
  };
};
