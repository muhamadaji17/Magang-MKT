/** @format */

import { DELETE, GET, POST, PUT } from "../../api";
import { generateEndpointWithQuery, generateHeaders } from "../";
import { SwalAlertBasic } from "../../utils/alert";

export const getFilmService = async (accessToken, extraOptions) => {
  const { setDatasFilms, setRefreshData, searchQuery } = extraOptions;

  const queryParams = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`crud/films/by?${queryParams}`, accessToken);
    sessionStorage.clear();

    const parsing = response.data.payload.map((data) => ({
      id: data.id_film,
      nama_film: data.nama_film,
      poster_film: data.poster_film,
      trailer_film: data.trailer_film,
      sinopsis_film_id: data.sinopsis_film_id,
      casting: data.casting_with_film,
      rating: data.rating_info,
      bts: data.bts_with_film,
      status: data.status,
      sinopsis_film_en: data.sinopsis_film_en,
      genre_film: data.genre_film,
      durasi_film: data.durasi_film,
      id_rating: data.id_rating,
      produser_film: data.produser_film,
      sutradara_film: data.sutradara_film,
      produksi_film: data.produksi_film,
    }));

    setDatasFilms(parsing);
    setRefreshData(true);
  } catch (error) {
    // console.error(error);
    if (
      error.response.data.status === false &&
      error.response.data.message === "Unauthorized!"
    ) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
};
export const getFilmByIdService = async (accessToken, extraOptions) => {
  const { setDatasDetailFilms, setRefreshData, searchQuery } = extraOptions;

  try {
    const response = await GET(
      `crud/films/getone/${searchQuery.id}`,
      accessToken
    );

    setDatasDetailFilms(response?.data?.payload);
    setRefreshData(true);
  } catch (error) {
    // console.error(error);
    if (
      error.response.data.status === false &&
      error.response.data.message === "Unauthorized!"
    ) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
};

export const addFilmService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });

  try {
    const response = await POST(
      "crud/films",
      { ...datas, poster_film: datas.poster_film[0] },
      headers
    );

    if (response.data.success) {
      setRefreshData(false);
      handleCloseModal();
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
    } else if (!response.data.success) {
      SwalAlertBasic({
        icon: "error",
        text: response.data.message,
      });
    }
  } catch (error) {
    if (
      error.response.data.status === false &&
      error.response.data.message === "Unauthorized!"
    ) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
};

export const updateFilmService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });

  try {
    const response = await PUT(
      "crud/films",
      {
        ...datas,
        poster_film:
          typeof datas.poster_film === "string"
            ? datas.poster_film
            : datas.poster_film[0],
      },
      headers
    );
    if (response.data.status === true) {
      setRefreshData(false);
      handleCloseModal();
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
    } else if (response.data.success === false) {
      SwalAlertBasic({
        icon: "error",
        text: response.data.message,
      });
    }
  } catch (error) {
    if (
      error.response.data.status === false &&
      error.response.data.message === "Unauthorized!"
    ) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
};

export const deleteFilmService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  try {
    const response = await DELETE("crud/films", accessToken, id);
    if (response.data.status === true) {
      setRefreshData(false);
      handleCloseModal();
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
    } else if (response.data.status === false) {
      SwalAlertBasic({
        icon: "error",
        text: response.data.message,
      });
    }
  } catch (error) {
    if (
      error.response.data.status === false &&
      error.response.data.message === "Unauthorized!"
    ) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
};
