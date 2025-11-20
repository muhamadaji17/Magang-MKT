/** @format */

import { useGlobalHook } from "../useGlobalHook";
import { getContactService } from "../../service";

import { useData } from "../useData";
import { useDebauncedEffect } from "../useDebouncedEffect";

export const useContactHook = () => {
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
  const { datasContact, setDatasContact } = useData();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getContactService(accessToken, {
          searchQuery,
          setDatasContact,
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
    datasContact,
    extraOptions,
    isLoading,
  };
};
