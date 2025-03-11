import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";
import { fetchCity } from "@/services/city/cityService";

export const useCity = () => {
  const [city, setCity] = useState([]);
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const {
    refresh,
    setRefresh,
    handleCloseModal,
    handleOpenModal,
    modalIsOpen,
    modalType,
    token,
  } = useGlobalHook();

  // const postSubmit = async (data) => {
  //   handleSubmit(data, postCity, {
  //     token,
  //     refresh,
  //     setRefresh,
  //     handleCloseModal,
  //   });
  // };

  // const editSubmit = async (data) => {
  //   const cityId = selectedCity.id_city;
  //   const updatedData = { ...data };
  //   updateCity(cityId, updatedData, {
  //     token,
  //     refresh,
  //     setRefresh,
  //     handleCloseModal,
  //   });
  // };

  // const deleteSubmit = async (cityId) => {
  //   deleteCity(cityId.id_city, {
  //     token,
  //     setRefresh,
  //     refresh,
  //   });
  // };

  const handleOpenEditModal = (cityId) => {
    console.log("Open Modal Edit :", cityId);
    setSelectedCity(cityId);
    handleOpenModal("edit");
  };

  useEffect(() => {
    fetchCity(token, {
      setCity,
      setProvinceOptions,
    });
  }, [refresh]);

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
  };
};
