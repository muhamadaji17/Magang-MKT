/** @format */

import { useEffect } from "react";
import { useGlobalHook } from "../useGlobalHook";
import { getRatingService } from "../../service";
import { useData } from "../useData";

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
    handleCloseSidebar,
  } = useGlobalHook();
  const { datasRating, setDatasRating } = useData();
  const extraOptions = {
    accessToken,
    setRefreshData,
    handleCloseSidebar,
    handleCloseModal,
  };

  useEffect(() => {
    const fetchData = () => {
      getRatingService(accessToken, {
        searchQuery,
        setDatasRating,
        setRefreshData,
      });
    };

    if (Object.keys(searchQuery).length > 0) {
      const timeout = setTimeout(fetchData, 300);
      return () => clearTimeout(timeout);
    } else {
      fetchData();
    }
  }, [searchQuery, refreshData]);

  return {
    datasRating,
    dataRow,
    setSearchQuery,
    submitType,
    extraOptions,
    stateShowModal,
    stateShowSidebar,
  };
};
