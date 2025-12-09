/** @format */

import { useGlobalHook } from "../useGlobalHook";
import { getMenuService, getProvinceService } from "../../service";
import { useData } from "../useData";
import { useDebauncedEffect } from "../useDebouncedEffect";

export const useMenuHook = () => {
  const {
    stateShowModal,
    refreshData,
    setRefreshData,
    accessToken,
    submitType,
    searchQuery,
    setSearchQuery,
    dataRow,
    handleCloseModal,
    isLoading,
    setIsLoading,
  } = useGlobalHook();

  const { dataMenu, setDataMenu } = useData();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getMenuService(accessToken, {
          searchQuery,
          setDataMenu,
          setRefreshData,
          handleCloseModal,
        }),
      ]).finally(() => setIsLoading(false));
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });

  return {
    dataMenu,
    extraOptions,
    stateShowModal,
    setSearchQuery,
    submitType,
    dataRow,
    handleCloseModal,
    getProvinceService,
    isLoading,
    accessToken,
  };
};
