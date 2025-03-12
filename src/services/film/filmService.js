import { DELETE, GET, POST, PUT } from "@/api/auth";
import showAlert from "@/utils/showAlert";
import Swal from "sweetalert2";

export const fetchFilms = async (token, extraOptions) => {
  const { setFilm } = extraOptions;
  try {
    const response = await GET("crud/films", token);
    const parse = response.payload.map((data) => ({
      id_film: data.id_film,
      nama_film: data.nama_film,
      poster_film: data.poster_film,
      trailer_film: data.trailer_film,
      status: data.status,
      sinopsis_film_id: data.sinopsis_film_id,
      created_by: data.created_films.user_name,
    }));
    setFilm(parse);
  } catch (error) {
    console.error("Error :", error);
  }
};

export const postFilm = async (data, extraOptions) => {
  const { token, handleCloseModal, refresh, setRefresh } = extraOptions;
  try {
    const response = await POST(`crud/films`, data, token, true);
    if (response.success === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error("error post :", error);
  }
};

export const updateFilm = async (filmId, updatedData, extraOptions) => {
  const { token, refresh, setRefresh, handleCloseModal } = extraOptions;
  try {
    const response = await PUT(
      `crud/films/${filmId}`,
      updatedData,
      token,
      true
    );
    if (response.status === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error("Error updating film: ", error);
    throw error;
  }
};

export const deleteFilm = async (filmId, extraOptions) => {
  const { token, refresh, setRefresh } = extraOptions;
  try {
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure want to delete?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "yes",
      cancelButtonText: "no",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await DELETE(`crud/films/${filmId}`, token);
        showAlert("success", "Deleted", response.message);
        setRefresh(!refresh);
      }
    });
  } catch (error) {
    console.error("error delete film: ", error);
  }
};
