import { handleSubmitData } from "../../pattern";
import {
  addProvinceService,
  deleteProvinceService,
  updateProvinceService,
} from "../dashboardService/provinceService";

export const handleAddProvince = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addProvinceService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleDeleteProvince = (extraOptions) => {
  return (datas) => {
    deleteProvinceService(datas.id, extraOptions);
  };
};

export const handleEditProvince = (extraOptions, dataRow) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData({ ...datas, id: dataRow.id }, updateProvinceService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};
