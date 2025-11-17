import { useData } from "../useData";
import { useGlobalHook } from "../useGlobalHook";
import { getRolesService } from "../../service";
import { useDebauncedEffect } from "../useDebouncedEffect";

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
    isLoading,
    setIsLoading,
  } = useGlobalHook();
  const { datasRole, setDatasRole } = useData();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getRolesService(accessToken, {
          searchQuery,
          setDatasRole,
          setRefreshData,
          handleCloseModal,
        }),
      ]).finally(() => setIsLoading(false));
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });

  return {
    datasRole,
    stateShowModal,
    submitType,
    isLoading,
    dataRow,
    extraOptions,
    setSearchQuery,
  };
};
