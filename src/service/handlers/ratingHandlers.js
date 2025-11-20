import { handleSubmitData } from "../../pattern";
import {
  addRatingService,
  deleteRatingService,
  updateRatingService,
} from "../dashboardService/ratingService";

export const handleAddRating = (extraOption) => {
  return (datas) => handleSubmitData(datas, addRatingService, extraOption);
};

export const handleEditRating = (extraOption, dataRow) => {
  return (datas) =>
    handleSubmitData(
      { ...datas, id: dataRow.id_rating },
      updateRatingService,
      extraOption
    );
};

export const handleDeleteRating = (extraOption) => {
  return (datas) => deleteRatingService(datas.id_rating, extraOption);
};
