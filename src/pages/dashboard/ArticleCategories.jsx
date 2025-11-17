import { useEffect } from "react";
import { useData, useGlobalHook } from "../../hook";
import {
  getArticleCategoryService,
  handleAddArticleCategory,
  handleDeleteArticleCategory,
  handleEditArticleCategory,
} from "../../service";
import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import {
  configTableArticleCategories,
  inputAddArticleCategories,
  inputEditArticleCategories,
} from "../../pattern";

const ArticleCategories = () => {
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

  useEffect(() => {
    Promise.all([
      getArticleCategoryService(accessToken, {
        searchQuery,
        setDatasArticleCategory,
        setRefreshData,
      }).then(() => setIsLoading(false)),
    ]);
  }, [refreshData]);

  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  return (
    <>
      <HeaderContent
        title={"Article Categories"}
        handleOpen={stateShowModal.handleShow}
      />

      <Table
        configTable={configTableArticleCategories}
        datasTable={datasArticleCategory}
        title={"Article Categories"}
        stateShowModal={stateShowModal}
        dataRow={dataRow}
        submitType={submitType}
        isLoading={isLoading}
        handleService={
          submitType === "add"
            ? handleAddArticleCategory(extraOptions)
            : submitType === "edit"
            ? handleEditArticleCategory(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteArticleCategory(extraOptions, dataRow)
            : null
        }
        inputForm={
          submitType === "add"
            ? inputAddArticleCategories
            : inputEditArticleCategories(dataRow)
        }
      />
    </>
  );
};

export default ArticleCategories;
