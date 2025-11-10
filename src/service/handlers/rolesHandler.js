import { handleSubmitData } from "../../pattern";
import {
  addRoleService,
  deleteRoleService,
  updateRoleService,
} from "../dashboardService/rolesService";

export const handleAddRole = (extraOptions) => {
  return (datas) => {
    handleSubmitData(datas, addRoleService, extraOptions);
  };
};

export const handleEditRole = (extraOptions, dataRow) => {
  return (datas) => {
    handleSubmitData(
      { ...datas, id: dataRow.id_roles },
      updateRoleService,
      extraOptions
    );
  };
};

export const handleDeleteRole = (extraOptions) => {
  return (datas) => {
    deleteRoleService(datas.id_roles, extraOptions);
  };
};
