/** @format */

import { useEffect } from "react";
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
  } = useGlobalHook();
  const { datasFilms, setDatasFilms, datasRating, setDatasRating } = useData();
  const extraOptions = {
    accessToken,
    setRefreshData,
    handleCloseModal,
  };

  useDebauncedEffect({
    fn: () => {
      getFilmService(accessToken, {
        searchQuery,
        setDatasFilms,
        setRefreshData,
      });
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
  };
};
