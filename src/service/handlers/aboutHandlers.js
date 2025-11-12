import { handleSubmitData } from "../../pattern";
import {
  addAboutService,
  deleteAboutService,
  updateAboutService,
} from "../dashboardService/aboutService";

export const handleAddAbout = (extraOptions) => {
  return (datas) => {
    handleSubmitData(datas, addAboutService, extraOptions);
  };
};

export const handleEditAbout = (extraOptions, dataRow) => {
  return (datas) => {
    handleSubmitData(
      { ...datas, id: dataRow.id_about },
      updateAboutService,
      extraOptions
    );
  };
};

export const handleDeleteAbout = (extraOptions, dataRow) => {
  return () => {
    deleteAboutService(dataRow.id_about, extraOptions);
  };
};
