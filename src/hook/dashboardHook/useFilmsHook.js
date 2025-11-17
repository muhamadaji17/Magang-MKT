/** @format */

import { useGlobalHook } from "../useGlobalHook";
import { getFilmService } from "../../service";
import { useData } from "../useData";
import { useDebauncedEffect } from "../useDebouncedEffect";

export const useFilmsHook = () => {
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
  const { datasFilms, setDatasFilms, datasRating, setDatasRating } = useData();
  const extraOptions = {
    accessToken,
    setRefreshData,
    handleCloseModal,
  };

  console.log(refreshData);

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getFilmService(accessToken, {
          searchQuery,
          setDatasFilms,
          setRefreshData,
        }).finally(() => setIsLoading(false)),
      ]);
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });

  return {
    datasFilms,
    dataRow,
    setSearchQuery,
    submitType,
    extraOptions,
    stateShowModal,
    stateShowSidebar,
    searchQuery,
    datasRating,
    setDatasRating,
    setRefreshData,
    accessToken,
    isLoading,
  };
};
