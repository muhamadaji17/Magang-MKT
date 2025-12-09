import { handleSubmitData } from "../../pattern";
import {
  addRatingService,
  deleteRatingService,
  updateRatingService,
} from "../dashboardService/ratingService";

export const handleAddRating = (extraOption) => {
  return (datas, extraOptionForm) =>
    handleSubmitData(datas, addRatingService, {
      ...extraOption,
      ...extraOptionForm,
    });
};

export const handleEditRating = (extraOption, dataRow) => {
  return (datas, extraOptionForm) =>
    handleSubmitData({ ...datas, id: dataRow.id_rating }, updateRatingService, {
      ...extraOption,
      ...extraOptionForm,
    });
};

export const handleDeleteRating = (extraOption) => {
  return (datas, extraOptionForm) =>
    deleteRatingService(datas.id_rating, {
      ...extraOption,
      ...extraOptionForm,
    });
};
