import { useEffect } from "react";
import { useData } from "../useData";
import { useGlobalHook } from "../useGlobalHook";
import { getArticleCategoryService, getArticlesService } from "../../service";

export const useArticles = () => {
  const {
    submitType,
    handleOpenModal,
    handleCloseModal,
    isModalOpen,
    refreshData,
    dataRow,
    accessToken,
    isLoading,
    setIsLoading,
    setRefreshData,
  } = useGlobalHook();
  const {
    datasArticle,
    setDatasArticle,
    datasArticleCategory,
    setDatasArticleCategory,
  } = useData();

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useEffect(() => {
    Promise.all([
      getArticlesService(accessToken, {
        setDatasArticle,
        setRefreshData,
        searchQuery: {},
      }),
      getArticleCategoryService(accessToken, {
        setDatasArticleCategory,
        setRefreshData,
        searchQuery: {},
      }).finally(() => setIsLoading(false)),
    ]);
  }, [refreshData]);

  return {
    datasArticle,
    datasArticleCategory,
    isModalOpen,
    isLoading,
    submitType,
    handleOpenModal,
    handleCloseModal,
    dataRow,
    extraOptions,
  };
};
