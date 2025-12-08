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
  return (datas, extraOptionsForm) => {
    handleSubmitData(id, deleteArticlesService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleAddArticleCategory = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addArticleCategoryService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleEditArticleCategory = (extraOptions, dataRow) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(
      { ...datas, id: dataRow.id_article_category },
      editArticleCategoryService,
      {
        ...extraOptions,
        ...extraOptionsForm,
      }
    );
  };
};

export const handleDeleteArticleCategory = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    deleteArticleCategoryService(datas.id_article_category, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};
