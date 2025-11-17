import { useGlobalHook } from "../useGlobalHook";
import { getCountryService, getProvinceService } from "../../service";
import { useDebauncedEffect } from "../useDebouncedEffect";
import { useData } from "../useData";

export const useProvinceHook = () => {
  const {
    refreshData,
    accessToken,
    setRefreshData,
    submitType,
    handleCloseModal,
    dataRow,
    searchQuery,
    setSearchQuery,
    stateShowModal,
    isLoading,
    setIsLoading,
  } = useGlobalHook();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };
  const { datasCountry, setDatasCountry, datasProvince, setDatasProvince } =
    useData();

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getProvinceService(accessToken, {
          searchQuery,
          setDatasProvince,
          setRefreshData,
        }),
      ]).finally(() => setIsLoading(false));
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });

  return {
    datasProvince,
    setSearchQuery,
    submitType,
    dataRow,
    stateShowModal,
    extraOptions,
    handleCloseModal,
    getCountryService,
    setDatasCountry,
    datasCountry,
    accessToken,
    setRefreshData,
    isLoading,
    setIsLoading,
  };
};
