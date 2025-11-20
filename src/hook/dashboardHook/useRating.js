/** @format */

import { getRatingService } from "../../service";
import { useData } from "../useData";
import { useGlobalHook } from "../useGlobalHook";
import { useDebauncedEffect } from "../useDebouncedEffect";

export const useRating = () => {
  const {
    accessToken,
    dataRow,
    submitType,
    refreshData,
    stateShowSidebar,
    stateShowModal,
    setRefreshData,
    searchQuery,
    setSearchQuery,
    handleCloseModal,
    isLoading,
    setIsLoading,
  } = useGlobalHook();
  const { datasRating, setDatasRating } = useData();
  const extraOptions = {
    accessToken,
    setRefreshData,
    handleCloseModal,
  };

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getRatingService(accessToken, {
          searchQuery,
          setDatasRating,
          setRefreshData,
        }),
      ]).finally(() => setIsLoading(false));
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });

  return {
    datasRating,
    dataRow,
    setSearchQuery,
    submitType,
    isLoading,
    extraOptions,
    stateShowModal,
    stateShowSidebar,
    accessToken,
  };
};
