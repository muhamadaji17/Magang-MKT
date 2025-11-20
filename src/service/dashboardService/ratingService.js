/** @format */

import { DELETE, GET, POST, PUT } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateEndpointWithQuery } from "../generateEndpointWithQuery";
import { generateHeaders } from "../generateHeaders";

export const getRatingService = async (accessToken, extraOptions) => {
  const { setDatasRating, setRefreshData, searchQuery } = extraOptions;

  const queryParams = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`crud/rating/by?${queryParams}`, accessToken);

    const gabung = response.data.payload?.map((data) => ({
      ...data,
      label: data.kode_rating,
      value: data.id_rating,
    }));

    setDatasRating(gabung);
    setRefreshData(true);
    // console.log(response);
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

export const addRatingService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({ accessToken });

  try {
    const response = await POST("crud/rating", datas, headers);

    if (response.data.status || response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      setRefreshData(false);
      handleCloseModal();
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateRatingService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/rating", datas, headers);

    if (response.data.status || response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      setRefreshData(false);
      handleCloseModal();
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteRatingService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  try {
    const response = await DELETE("crud/rating", accessToken, id);
    if (response.data.status || response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setRefreshData(false);
    }
  } catch (error) {
    console.error("Delete Failed:", error);
    throw error;
  }
};
