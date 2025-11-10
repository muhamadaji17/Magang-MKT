import { handleSubmitData } from "../../pattern";
import {
  addUserService,
  deleteUserService,
  updateUserService,
} from "../dashboardService/userService";

export const handleAddUser = (extraOptions) => {
  return (datas) => {
    handleSubmitData(datas, addUserService, extraOptions);
  };
};

export const handleEditUser = (extraOptions, dataRow) => {
  return (datas) => {
    handleSubmitData(
      { ...datas, id: dataRow.id_admin },
      updateUserService,
      extraOptions
    );
  };
};

export const handleDeleteUser = (extraOptions) => {
  return (datas) => {
    deleteUserService(datas.id_admin, extraOptions);
  };
};
