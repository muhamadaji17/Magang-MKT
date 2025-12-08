import { handleSubmitData } from "../../pattern";
import {
  addCountryService,
  deleteCountryService,
  updateCountryService,
} from "../dashboardService/countryService";

export const handleAddCountry = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addCountryService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleEditCountry = (extraOptions, dataRow) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData({ ...datas, id: dataRow.id }, updateCountryService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleDeleteCountry = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    deleteCountryService(datas.id, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};
