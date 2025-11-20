import { handleSubmitData } from "../../pattern";
import {
  addCountryService,
  deleteCountryService,
  updateCountryService,
} from "../dashboardService/countryService";

export const handleAddCountry = (extraOptions) => {
  return (datas) => {
    handleSubmitData(datas, addCountryService, extraOptions);
  };
};

export const handleEditCountry = (extraOptions, dataRow) => {
  return (datas) => {
    handleSubmitData(
      { ...datas, id: dataRow.id },
      updateCountryService,
      extraOptions
    );
  };
};

export const handleDeleteCountry = (extraOptions) => {
  return (datas) => {
    deleteCountryService(datas.id, extraOptions);
  };
};
