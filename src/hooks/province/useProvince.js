import {
  fetchProvince,
  getProvinceById,
} from "@/services/province/provinceService";
import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";

export const useProvince = () => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [province, setProvince] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const {
    refresh,
    setRefresh,
    handleOpenModal,
    handleCloseModal,
    modalIsOpen,
    modalType,
    token,
  } = useGlobalHook();

  const handleOpenEditModal = (provinceId) => {
    console.log("Open Modal Edit :", provinceId);
    setSelectedProvince(provinceId);
    handleOpenModal("edit");
  };

  useEffect(() => {
    if (searchQuery) {
      getProvinceById(searchQuery, { token, setProvince });
    } else {
      fetchProvince(token, {
        setProvince,
        setCountryOptions,
      });
    }
  }, [refresh, searchQuery, token]);

  return {
    province,
    handleCloseModal,
    handleOpenModal,
    handleOpenEditModal,
    modalIsOpen,
    modalType,
    countryOptions,
    token,
    refresh,
    setRefresh,
    selectedProvince,
    searchQuery,
    setSearchQuery,
  };
};
