import { useEffect, useState } from "react";
import { useGlobalHook } from "../useGlobalHook";

import { getBannerService } from "../../service/dashboardService/bannerService";

export const useBannerHook = () => {
  const [dataBanner, setDataBanner] = useState([]);
  const {
    refreshData,
    setRefreshData,
    accessToken,
    handleCloseModal,
    handleCloseSidebar,
    stateShowModal,
    stateShowSidebar,
    submitType,
    dataRow,
  } = useGlobalHook();

  const extraOptions = {
    accessToken,
    setRefreshData,
    handleCloseModal,
    handleCloseSidebar,
  };

  useEffect(() => {
    getBannerService(accessToken, { setDataBanner, setRefreshData });
  }, [refreshData]);

  return {
    dataBanner,
    dataRow,
    submitType,
    extraOptions,
    stateShowModal,
    stateShowSidebar,
  };
};
