import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";
import { fetchFilms } from "@/services/film/filmService";

export const useFilm = () => {
  const [film, setFilm] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const {
    token,
    modalType,
    refresh,
    modalIsOpen,
    setRefresh,
    handleCloseModal,
    handleOpenModal,
  } = useGlobalHook();

  const handleOpenEditModal = (filmId) => {
    setSelectedFilm(filmId);
    handleOpenModal("edit");
  };

  useEffect(() => {
    fetchFilms(token, { setFilm });
  }, [refresh]);
  return {
    film,
    refresh,
    setRefresh,
    handleCloseModal,
    handleOpenModal,
    handleOpenEditModal,
    selectedFilm,
    modalIsOpen,
    modalType,
    token,
  };
};
