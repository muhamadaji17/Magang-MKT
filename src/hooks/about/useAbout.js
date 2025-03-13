import { fetchAbout } from "@/services/about/aboutService";
import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";

export const useAbout = () => {
  const [about, setAbout] = useState([]);
  const {
    refresh,
    token,
    handleOpenModal,
    setRefresh,
    handleCloseModal,
    modalIsOpen,
    modalType,
  } = useGlobalHook();

  useEffect(() => {
    fetchAbout(token, { setAbout });
  }, []);

  return {
    refresh,
    handleOpenModal,
    setRefresh,
    about,
    handleCloseModal,
    modalIsOpen,
    modalType,
  };
};
