import { handleSubmitData } from "../../pattern";
import {
  addProvinceService,
  deleteProvinceService,
  updateProvinceService,
} from "../dashboardService/provinceService";

export const handleAddProvince = (extraOptions) => {
  return (datas) => {
    handleSubmitData(datas, addProvinceService, extraOptions);
  };
};

export const handleDeleteProvince = (extraOptions) => {
  return (datas) => {
    deleteProvinceService(datas.id, extraOptions);
  };
};

export const handleEditProvince = (extraOptions, dataRow) => {
  return (datas) => {
    handleSubmitData(
      { ...datas, id: dataRow.id },
      updateProvinceService,
      extraOptions
    );
  };
};
