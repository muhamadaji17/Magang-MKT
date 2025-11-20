/** @format */

import { useGlobalHook } from "../useGlobalHook";
import { getCategoryContactService } from "../../service";

import { useData } from "../useData";
import { useDebauncedEffect } from "../useDebouncedEffect";

export const useContactCategoryHook = () => {
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
  const { datasContactCategory, setDatasContactCategory } = useData();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getCategoryContactService(accessToken, {
          searchQuery,
          setDatasContactCategory,
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
    datasContactCategory,
    extraOptions,
    isLoading,
  };
};
