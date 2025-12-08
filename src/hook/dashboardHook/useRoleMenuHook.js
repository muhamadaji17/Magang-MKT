import { getRoleMenuService } from "../../service";
import { useData } from "../useData";
import { useDebauncedEffect } from "../useDebouncedEffect";
import { useGlobalHook } from "../useGlobalHook";

export const useRoleMenuHook = () => {
  const {
    stateShowModal,
    dataRow,
    setDataRow,
    submitType,
    accessToken,
    refreshData,
    setRefreshData,
    isLoading,
    searchQuery,
    setSearchQuery,
    setIsLoading,
  } = useGlobalHook();
  const { datasRoleMenu, setDatasRoleMenu } = useData();

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getRoleMenuService(accessToken, {
          searchQuery,
          setDatasRoleMenu,
          setRefreshData,
        }),
      ]).finally(() => setIsLoading(false));
    },
    deps: [searchQuery, refreshData],
  });

  return {
    stateShowModal,
    dataRow,
    setDataRow,
    submitType,
    datasRoleMenu,
    isLoading,
    setSearchQuery,
    accessToken,
  };
};
