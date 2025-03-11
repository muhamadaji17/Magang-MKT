import { fetchFilm, postFilm, updateFilm } from "@/services/film/filmService";
import showAlert from "@/utils/showAlert";
import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";

export const useFilm = (token) => {
  const [film, setFilm] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const {
    handleCloseModal,
    handleOpenModal,
    modalIsOpen,
    modalType,
    refresh,
    setRefresh,
  } = useGlobalHook();

  const getFilm = async () => {
    const response = await fetchFilm(token);
    console.log(response);
    const pharse = response.map((data) => ({
      nama_film: data.nama_film,
      poster_film: data.poster_film,
      trailer_film: data.trailer_film,
      sinopsis_film_id: data.sinopsis_film_id,
      sinopsis_film_en: data.sinopsis_film_en,
      status: data.status,
      id_film: data.id_film,
      user_name: data.created_films.user_name,
    }));
    console.log("Response film :", pharse);
    setFilm(pharse);
  };

  const postSubmit = async (data) => {
    try {
      const formData = { ...data, poster_film: data.poster_film[0] };

      console.log("Data: ", data);
      const response = await postFilm(formData, token, true);
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    } catch (error) {
      console.error("error post :", error);
    }
  };

  const editSubmit = (data) => {
    try {
      const formData = {
        ...data,
        poster_film:
          typeof data.poster_film === "string"
            ? data.poster_film
            : data.poster_film[0],
      };
      const response = updateFilm(selectedFilm, formData, token, true);
      setRefresh(!refresh);
      handleCloseModal();
      return response;
    } catch (error) {
      console.error("error post :", error);
    }
  };

  const handleOpenEditModal = (filmId) => {
    setSelectedFilm(filmId);
    handleOpenModal("edit");
  };

  useEffect(() => {
    getFilm();
  }, [refresh]);

  return {
    film,
    handleOpenModal,
    handleCloseModal,
    handleOpenEditModal,
    editSubmit,
    postSubmit,
    modalType,
    selectedFilm,
    modalIsOpen,
  };
};
