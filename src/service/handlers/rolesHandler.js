import { handleSubmitData } from "../../pattern";
import {
  addRoleService,
  deleteRoleService,
  updateRoleService,
} from "../dashboardService/rolesService";

export const handleAddRole = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addRoleService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleEditRole = (extraOptions, dataRow) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData({ ...datas, id: dataRow.id_roles }, updateRoleService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleDeleteRole = (extraOptions) => {
  return (datas) => {
    deleteRoleService(datas.id_roles, extraOptions);
  };
};
