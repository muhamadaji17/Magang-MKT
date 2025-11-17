import { useGlobalHook } from "../useGlobalHook";
import { getCountryService } from "../../service";
import { useDebauncedEffect } from "../useDebouncedEffect";
import { useData } from "../useData";

export const useCountryHook = () => {
  const {
    accessToken,
    refreshData,
    searchQuery,
    setSearchQuery,
    setRefreshData,
    handleCloseModal,
    submitType,
    stateShowModal,
    dataRow,
    isLoading,
    setIsLoading,
  } = useGlobalHook();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };
  const { datasCountry, setDatasCountry } = useData();

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getCountryService(accessToken, {
          searchQuery,
          setDatasCountry,
          setRefreshData,
          handleCloseModal,
        }),
      ]).finally(() => setIsLoading(false));
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });

  return {
    datasCountry,
    setSearchQuery,
    isLoading,
    submitType,
    dataRow,
    extraOptions,
    stateShowModal,
  };
};
