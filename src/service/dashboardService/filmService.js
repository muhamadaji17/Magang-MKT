import { DELETE, GET, POST, PUT } from "../../api";
import { generateEndpointWithQuery, generateHeaders } from "../";

export const getFilmService = async (accessToken, extraOptions) => {
  const { setDatasFilms, setRefreshData, searchQuery } = extraOptions;

  const queryParams = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`crud/films/by?${queryParams}`, accessToken);
    const parsing = response.data.payload.map((data) => ({
      id: data.id_film,
      nama_film: data.nama_film,
      poster_film: data.poster_film,
      trailer_film: data.trailer_film,
      sinopsis_film_id: data.sinopsis_film_id,
      status: data.status,
    }));

    setDatasFilms(parsing);
    setRefreshData(true);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const addFilmService = async (datas, extraOptions) => {
  const {
    accessToken,
    setRefreshData,
    handleCloseSidebar,
    reset,
    setFileName,
    setImagePreview,
  } = extraOptions;
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
    console.log(response);
    if (response.data.success) {
      alert(response.data.message);
      setRefreshData(false);
      handleCloseSidebar();
      reset();
      setFileName("");
      setImagePreview(null);
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateFilmService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseSidebar } = extraOptions;
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
    console.log(response);
    if (response.data.status) {
      alert(response.data.message);
      setRefreshData(false);
      handleCloseSidebar();
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteFilmService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  try {
    const response = await DELETE("crud/films", accessToken, id);
    if (response.data.success) {
      alert(response.data.message);
      handleCloseModal();
      setRefreshData(false);
    }
    console.log(response);
  } catch (error) {
    console.error("Delete Failed:", error);
    throw error;
  }
};
