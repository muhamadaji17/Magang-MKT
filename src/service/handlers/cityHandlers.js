import { handleSubmitData } from "../../pattern";
import {
  addCityService,
  deleteCityService,
  updateCityService,
} from "../dashboardService/cityService";

export const handleAddCity = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addCityService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleDeleteCity = (extraOptions) => {
  return (datas) => {
    deleteCityService(datas.id, extraOptions);
  };
};

export const handleEditCity = (extraOptions, dataRow) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData({ ...datas, id: dataRow.id }, updateCityService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};
