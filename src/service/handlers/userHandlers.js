import { handleSubmitData } from "../../pattern";
import { addUserService } from "../dashboardService/userService";

export const handleAddUser = (extraOptions) => {
  return (datas) => {
    handleSubmitData(datas, addUserService, extraOptions);
  };
};

export const handleEditUser = (extraOptions, dataRow) => {
  return (datas) => {
    handleSubmitData(
      { ...datas, id: dataRow.id },
      addUserService,
      extraOptions
    );
  };
};
