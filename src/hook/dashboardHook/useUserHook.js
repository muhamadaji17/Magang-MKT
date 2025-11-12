import { useData } from "../useData";
import { useGlobalHook } from "../useGlobalHook";
import { getUserService } from "../../service";
import { useDebauncedEffect } from "../useDebouncedEffect";

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
    isLoading,
    setIsLoading,
  } = useGlobalHook();
  const { datasUser, setDatasUser, datasRole, setDatasRole } = useData();
  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getUserService(accessToken, {
          searchQuery,
          setDatasUser,
          setRefreshData,
          handleCloseModal,
        }),
      ]).finally(() => setIsLoading(false));
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });

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
    isLoading,
    setRefreshData,
  };
};
