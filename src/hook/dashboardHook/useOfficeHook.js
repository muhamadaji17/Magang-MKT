import { useGlobalHook } from "../useGlobalHook";
import { getCityService, getOfficeService } from "../../service";

import { useData } from "../useData";
import { useDebauncedEffect } from "../useDebouncedEffect";

export const useOfficeHook = () => {
  const {
    accessToken,
    refreshData,
    setRefreshData,
    stateShowModal,
    handleCloseModal,
    dataRow,
    searchQuery,
    setSearchQuery,
    submitType,
    isLoading,
    setIsLoading,
  } = useGlobalHook();
  const { datasOffice, setDatasOffice, datasCity, setDatasCity } = useData();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getOfficeService(accessToken, {
          searchQuery,
          setDatasOffice,
          setRefreshData,
          handleCloseModal,
        }),
      ]).finally(() => setIsLoading(false));
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });

  return {
    accessToken,
    refreshData,
    setRefreshData,
    stateShowModal,
    setSearchQuery,
    dataRow,
    submitType,
    datasOffice,
    datasCity,
    setDatasCity,
    getCityService,
    extraOptions,
    isLoading,
  };
};
