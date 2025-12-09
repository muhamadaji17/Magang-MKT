import { handleSubmitData } from "../../pattern";
import {
  addRoleMenuService,
  deleteRoleMenuService,
  updateRoleMenuService,
} from "../dashboardService/roleMenuService";

export const handleAddRoleMenu = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addRoleMenuService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleEditRoleMenu = (extraOptions, dataRow) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(
      { ...datas, id: dataRow.id_role_menu },
      updateRoleMenuService,
      {
        ...extraOptions,
        ...extraOptionsForm,
      }
    );
  };
};

export const handleDeleteRoleMenu = (extraOptions) => {
  return (datas) => {
    deleteRoleMenuService(datas.id_role_menu, extraOptions);
  };
};
