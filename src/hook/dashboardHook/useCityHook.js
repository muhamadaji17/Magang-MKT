import { useGlobalHook } from "../useGlobalHook";
import { getCityService, getProvinceService } from "../../service";
import { useData } from "../useData";
import { useDebauncedEffect } from "../useDebouncedEffect";

export const useCityHook = () => {
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

  const { datasProvince, setDatasProvince, datasCity, setDatasCity } =
    useData();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getCityService(accessToken, {
          searchQuery,
          setDatasCity,
          setRefreshData,
          handleCloseModal,
        }),
      ]).finally(() => setIsLoading(false));
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });

  return {
    datasCity,
    extraOptions,
    stateShowModal,
    setSearchQuery,
    submitType,
    dataRow,
    handleCloseModal,
    getProvinceService,
    datasProvince,
    setDatasProvince,
    isLoading,
    accessToken,
  };
};
