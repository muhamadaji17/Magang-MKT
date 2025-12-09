import { handleSubmitData } from "../../pattern";
import {
  addUserService,
  deleteUserService,
  updateUserService,
} from "../dashboardService/userService";

export const handleAddUser = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addUserService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleEditUser = (extraOptions, dataRow) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData({ ...datas, id: dataRow.id_admin }, updateUserService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleDeleteUser = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    deleteUserService(datas.id_admin, { ...extraOptions, ...extraOptionsForm });
  };
};
