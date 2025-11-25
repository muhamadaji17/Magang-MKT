import { handleSubmitData } from "../../pattern";
import {
  addAboutService,
  deleteAboutService,
  updateAboutService,
} from "../dashboardService/aboutService";

export const handleAddAbout = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addAboutService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleEditAbout = (extraOptions, dataRow) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData({ ...datas, id: dataRow.id_about }, updateAboutService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleDeleteAbout = (extraOptions, dataRow) => {
  return () => {
    deleteAboutService(dataRow.id_about, extraOptions);
  };
};
