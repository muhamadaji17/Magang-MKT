import { handleSubmitData } from "../../pattern";
import {
  deleteSubscribersService,
  updateSubscribersService,
} from "../dashboardService/subscribersService";

export const handleEditSubscribers = (extraOptions, dataRow) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(
      { ...datas, id: dataRow.id_subscribers },
      updateSubscribersService,
      {
        ...extraOptions,
        ...extraOptionsForm,
      }
    );
  };
};
export const handleDeleteSubscribers = (extraOptions) => {
  return (datas, extraOptionsDelete) => {
    deleteSubscribersService(datas.id_subscribers, {
      ...extraOptions,
      ...extraOptionsDelete,
    });
  };
};
