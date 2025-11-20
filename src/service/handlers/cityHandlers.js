import { handleSubmitData } from "../../pattern";
import {
  addCityService,
  deleteCityService,
  updateCityService,
} from "../dashboardService/cityService";

export const handleAddCity = (extraOptions) => {
  return (datas) => {
    handleSubmitData(datas, addCityService, extraOptions);
  };
};

export const handleDeleteCity = (extraOptions) => {
  return (datas) => {
    deleteCityService(datas.id, extraOptions);
  };
};

export const handleEditCity = (extraOptions, dataRow) => {
  return (datas) => {
    handleSubmitData(
      { ...datas, id: dataRow.id },
      updateCityService,
      extraOptions
    );
  };
};
