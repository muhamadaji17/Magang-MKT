import { useEffect } from "react";
import { useData } from "../useData";
import { useGlobalHook } from "../useGlobalHook";
import { getUserService } from "../../service";

export const useUserHook = () => {
  const {
    accessToken,
    dataRow,
    submitType,
    refreshData,
    stateShowModal,
    setRefreshData,
    searchQuery,
    setSearchQuery,
    handleCloseModal,
  } = useGlobalHook();
  const { datasUser, setDatasUser, datasRole, setDatasRole } = useData();
  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useEffect(() => {
    const fetchData = () => {
      getUserService(accessToken, {
        setRefreshData,
        searchQuery,
        setDatasUser,
      });
    };

    if (Object.keys(searchQuery).length > 0) {
      const timeout = setTimeout(fetchData, 300);
      return () => clearTimeout(timeout);
    } else {
      fetchData();
    }
  }, [refreshData, searchQuery]);
  return {
    datasUser,
    datasRole,
    dataRow,
    extraOptions,
    setDatasRole,
    searchQuery,
    setSearchQuery,
    stateShowModal,
    submitType,
    accessToken,
    setRefreshData,
  };
};
