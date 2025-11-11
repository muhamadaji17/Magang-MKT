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
  } = useGlobalHook();

  const { datasProvince, setDatasProvince, datasCity, setDatasCity } =
    useData();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useDebauncedEffect({
    fn: () => {
      getCityService(accessToken, {
        searchQuery,
        setDatasCity,
        setRefreshData,
        handleCloseModal,
      });
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
    accessToken,
  };
};
