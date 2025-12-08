import {
  getMenuService,
  getRoleMenuService,
  getRolesService,
} from "../../service";
import { useData } from "../useData";
import { useDebauncedEffect } from "../useDebouncedEffect";
import { useGlobalHook } from "../useGlobalHook";

export const useRoleMenuHook = () => {
  const {
    stateShowModal,
    dataRow,
    submitType,
    accessToken,
    refreshData,
    setRefreshData,
    isLoading,
    searchQuery,
    setSearchQuery,
    setIsLoading,
    handleCloseModal,
  } = useGlobalHook();
  const {
    datasRoleMenu,
    setDatasRoleMenu,
    datasRole,
    setDatasRole,
    dataMenu,
    setDataMenu,
  } = useData();
  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getRoleMenuService(accessToken, {
          setRefreshData,
          setDatasRoleMenu,
          searchQuery,
        }),
      ]).finally(() => setIsLoading(false));
    },
    deps: [searchQuery, refreshData],
  });

  const handleAPI = () => {
    Promise.all([
      getRolesService(accessToken, {
        setDatasRole,
        setRefreshData,
        searchQuery: {},
      }),
      getMenuService(accessToken, {
        setDataMenu,
        setRefreshData,
        searchQuery: {},
      }),
    ]);
  };

  return {
    stateShowModal,
    dataRow,
    submitType,
    datasRoleMenu,
    isLoading,
    setSearchQuery,
    extraOptions,
    datasRole,
    handleAPI,
    dataMenu,
  };
};
