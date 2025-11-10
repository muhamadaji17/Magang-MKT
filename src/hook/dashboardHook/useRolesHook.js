import { useEffect } from "react";
import { useData } from "../useData";
import { useGlobalHook } from "../useGlobalHook";
import { getRolesService } from "../../service";

export const useRolesHook = () => {
  const {
    stateShowModal,
    accessToken,
    submitType,
    dataRow,
    setRefreshData,
    refreshData,
    searchQuery,
    setSearchQuery,
    handleCloseModal,
  } = useGlobalHook();
  const { datasRole, setDatasRole } = useData();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useEffect(() => {
    const fetchData = () => {
      getRolesService(accessToken, {
        setRefreshData,
        setDatasRole,
        searchQuery,
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
    datasRole,
    stateShowModal,
    submitType,
    dataRow,
    extraOptions,
    setSearchQuery,
  };
};
