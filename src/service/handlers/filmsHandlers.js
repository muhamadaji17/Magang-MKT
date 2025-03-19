import { handleSubmitData } from "../../pattern";
import {
  addFilmService,
  deleteFilmService,
  updateFilmService,
} from "../dashboardService/filmService";

export const handleAddFilms = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addFilmService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleEditFilms = (extraOptions, dataRow) => {
  return (datas) => {
    handleSubmitData(
      { ...datas, id: dataRow.id },
      updateFilmService,
      extraOptions
    );
  };
};

export const handleDeleteFilms = (extraOptions) => {
  return (datas) => {
    deleteFilmService(datas.id, extraOptions);
  };
};
