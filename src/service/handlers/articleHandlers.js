import { handleSubmitData } from "../../pattern";
import {
  addArticleCategoryService,
  deleteArticleCategoryService,
  editArticleCategoryService,
} from "../dashboardService/articlesService";

export const handleAddArticleCategory = (extraOptions) => {
  return (datas) => {
    handleSubmitData(datas, addArticleCategoryService, extraOptions);
  };
};

export const handleEditArticleCategory = (extraOptions, dataRow) => {
  return (datas) => {
    handleSubmitData(
      { ...datas, id: dataRow.id_article_category },
      editArticleCategoryService,
      extraOptions
    );
  };
};

export const handleDeleteArticleCategory = (extraOptions) => {
  return (datas) => {
    deleteArticleCategoryService(datas.id_article_category, extraOptions);
  };
};
