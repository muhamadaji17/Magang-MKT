import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";
import { fetchFilms, getFilmById } from "@/services/film/filmService";

export const useFilm = () => {
  const [film, setFilm] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [searchQuery, setSearchQuery] = useState({});
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
    const fetchData = () => {
      if (Object.values(searchQuery).some((value) => value)) {
        getFilmById(searchQuery, { token, setFilm });
      } else {
        fetchFilms(token, { setFilm, setRefresh });
      }
    };
    fetchData();
  }, [refresh, searchQuery, token]);
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
    searchQuery,
    setSearchQuery,
  };
};
