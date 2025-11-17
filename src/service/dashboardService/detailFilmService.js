/** @format */

import { DELETE, GET, POST, PUT } from "../../api";
import { generateHeaders } from "..";
import { SwalAlertBasic } from "../../utils/alert";

export const getFilmByIdService = async (accessToken, extraOptions) => {
  const { setDatasDetailFilms, setRefreshData, searchQuery } = extraOptions;

  try {
    const response = await GET(
      `crud/films/getone/${searchQuery.id}`,
      accessToken
    );

    setDatasDetailFilms(response.data.payload);
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

export const addCastingFilmService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });

  // console.log({ ...datas, poster_casting_film: datas.poster_casting_film[0] });

  try {
    const response = await POST(
      "crud/casting_film",
      { ...datas, poster_casting_film: datas.poster_casting_film[0] },
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
    console.log(error);

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

export const updateCastingFilmService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });

  try {
    const response = await PUT(
      "crud/casting_film",
      { ...datas, poster_casting_film: datas.poster_casting_film[0] },
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
    if (response.data.success === true) {
      handleCloseModal();
      setRefreshData(false);
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
