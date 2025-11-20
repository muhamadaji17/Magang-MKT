import { getArticleCategoryService } from "../../service";
import { useData } from "../useData";
import { useDebauncedEffect } from "../useDebouncedEffect";
import { useGlobalHook } from "../useGlobalHook";

export const useArticleCategories = () => {
  const {
    accessToken,
    dataRow,
    setSearchQuery,
    searchQuery,
    submitType,
    refreshData,
    setRefreshData,
    isLoading,
    setIsLoading,
    stateShowModal,
    handleCloseModal,
  } = useGlobalHook();

  const { datasArticleCategory, setDatasArticleCategory } = useData();

  useDebauncedEffect({
    fn: () => {
      Promise.all([
        getArticleCategoryService(accessToken, {
          searchQuery,
          setDatasArticleCategory,
          setRefreshData,
        }).then(() => setIsLoading(false)),
      ]);
    },
    deps: [searchQuery, refreshData],
    condition: Object.keys(searchQuery).length > 0,
  });

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  return {
    datasArticleCategory,
    setDatasArticleCategory,
    extraOptions,
    submitType,
    stateShowModal,
    dataRow,
    setSearchQuery,
    searchQuery,
    handleCloseModal,
    isLoading,
    setIsLoading,
  };
};
