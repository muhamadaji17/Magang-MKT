import { handleSubmitData } from "../../pattern";
import {
  addArticleCategoryService,
  addArticlesService,
  deleteArticleCategoryService,
  deleteArticlesService,
  editArticleCategoryService,
  updateArticlesService,
} from "../dashboardService/articlesService";

export const handleAddArticle = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addArticlesService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleEditArticle = (extraOptions, datasDetailArticle) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(
      { ...datas, id: datasDetailArticle?.id_article },
      updateArticlesService,
      { ...extraOptions, ...extraOptionsForm }
    );
  };
};

export const handleDeleteArticle = (id, extraOptions) => {
  return () => {
    handleSubmitData(id, deleteArticlesService, extraOptions);
  };
};

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
