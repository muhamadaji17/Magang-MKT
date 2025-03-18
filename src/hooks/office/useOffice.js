import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";
import { fetchOffice, getOfficeById } from "@/services/office/officeService";

export const useOffice = () => {
  const [office, setOffice] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCoords, setSelectedCoords] = useState({
    address: "",
    latitude: 0,
    longitude: 0,
  });

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

  const handleEyeClick = (row) => {
    setSelectedCoords({
      address: row.address,
      latitude: row.latitude,
      longitude: row.longitude,
    });
    handleOpenModal("map");
  };

  useEffect(() => {
    const fetchData = () => {
      if (Object.values(searchQuery).some((value) => value)) {
        getOfficeById(searchQuery, { token, setOffice });
      } else {
        fetchOffice(token, { setOffice, setCityOptions, setRefresh });
      }
    };
    fetchData();
  }, [refresh, searchQuery, token]);

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
    setSearchQuery,
    searchQuery,
    handleEyeClick,
    selectedCoords,
  };
};
