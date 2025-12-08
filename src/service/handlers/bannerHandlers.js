import { handleSubmitData } from "../../pattern";
import {
  addBannerService,
  deleteBannerService,
  updateBannerService,
} from "../dashboardService/bannerService";

export const handleAddBanner = (extraOptions) => (datas, extraOptionsForm) =>
  handleSubmitData(datas, addBannerService, {
    ...extraOptions,
    ...extraOptionsForm,
  });

export const handleUpdateBanner = (extraOptions, dataRow) => {
  return (datas, extraOptionsCalendar) =>
    handleSubmitData({ ...datas, id: dataRow.id }, updateBannerService, {
      ...extraOptions,
      ...extraOptionsCalendar,
    });
};

export const handleServiceWithOnClick = (extraOptions) => {
  return (datas, extraOptionsCalendar) => {
    const { type } = extraOptionsCalendar;

    switch (type) {
      case "delete":
        deleteBannerService(datas.id, {
          ...extraOptions,
          ...extraOptionsCalendar,
        });
        break;

      case "updateSchedule":
        updateBannerService(datas, {
          ...extraOptions,
          ...extraOptionsCalendar,
        });
        break;
    }
  };
};
