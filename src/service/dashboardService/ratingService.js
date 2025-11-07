/** @format */

import { GET } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateEndpointWithQuery } from "../generateEndpointWithQuery";

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
