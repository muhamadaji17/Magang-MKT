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
  } = useGlobalHook();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };
  const { datasCountry, setDatasCountry } = useData();

  useDebauncedEffect({
    fn: () => {
      getCountryService(accessToken, {
        searchQuery,
        setDatasCountry,
        setRefreshData,
        handleCloseModal,
      });
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });

  return {
    datasCountry,
    setSearchQuery,
    submitType,
    dataRow,
    extraOptions,
    stateShowModal,
  };
};
