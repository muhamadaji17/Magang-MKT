import { handleSubmitData } from "../../pattern";
import {
  addOfficeService,
  deleteOfficeService,
  updateOfficeService,
} from "../dashboardService/officeService";

export const handleAddOffice = (extraOptions) => {
  return (datas) => {
    handleSubmitData(datas, addOfficeService, extraOptions);
  };
};

export const handleDeleteOffice = (extraOptions) => {
  return (datas) => {
    deleteOfficeService(datas.id, extraOptions);
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
