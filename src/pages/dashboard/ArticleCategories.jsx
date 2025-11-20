import { useArticleCategories } from "../../hook";
import {
  handleAddArticleCategory,
  handleDeleteArticleCategory,
  handleEditArticleCategory,
} from "../../service";
import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import {
  configTableArticleCategories,
  handleSearch,
  inputAddArticleCategories,
  inputEditArticleCategories,
} from "../../pattern";

const ArticleCategories = () => {
  const {
    datasArticleCategory,
    stateShowModal,
    dataRow,
    submitType,
    setSearchQuery,
    isLoading,
    extraOptions,
  } = useArticleCategories();

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
        handleSearch={handleSearch(setSearchQuery)}
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
