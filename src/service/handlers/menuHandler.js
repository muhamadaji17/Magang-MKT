import { handleSubmitData } from "../../pattern";
import {
  addMenuService,
  deleteMenuService,
  updateMenuService,
} from "../dashboardService/menuService";

export const handleAddMenu = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addMenuService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleEditMenu = (extraOptions, dataRow) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData({ ...datas, id: dataRow.id_menu }, updateMenuService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleDeleteMenu = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas.id_menu, deleteMenuService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};
