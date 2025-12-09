import { handleSubmitData } from "../../pattern";
import {
  addOfficeService,
  deleteOfficeService,
  updateOfficeService,
} from "../dashboardService/officeService";

export const handleAddOffice = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addOfficeService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleDeleteOffice = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    deleteOfficeService(datas.id, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleEditOffice = (extraOptions, dataRow) => {
  return (datas) => {
    handleSubmitData(
      { ...datas, id: dataRow.id },
      updateOfficeService,
      extraOptions
    );
  };
};
