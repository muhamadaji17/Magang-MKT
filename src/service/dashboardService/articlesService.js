import { DELETE, GET, POST, PUT } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateHeaders } from "../generateHeaders";

export const getArticlesService = async (accessToken, extraOptions) => {
  const { setDatasArticle, setRefreshData } = extraOptions;

  try {
    const response = await GET("crud/article", accessToken);
    const payload = response.data.payload;

    setDatasArticle(payload);
    setRefreshData(true);
  } catch (error) {
    console.error(error);
  }
};

export const getArticleCategoryService = async (accessToken, extraOptions) => {
  const { setDatasArticleCategory, setRefreshData } = extraOptions;

  try {
    const response = await GET("crud/article_category", accessToken);
    const payload = response.data.payload;
    setDatasArticleCategory(payload);

    setRefreshData(true);
  } catch (error) {
    console.error(error);
  }
};

export const addArticleCategoryService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({ accessToken });

  try {
    const response = await POST("crud/article_category", datas, headers);

    SwalAlertBasic({ icon: "success", text: response.data.message });
    setRefreshData(false);
    handleCloseModal();
  } catch (error) {
    console.error(error);
  }
};

export const editArticleCategoryService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({ accessToken });
  try {
    const response = await PUT("crud/article_category", datas, headers);

    SwalAlertBasic({ icon: "success", text: response.data.message });
    setRefreshData(false);
    handleCloseModal();
  } catch (error) {
    console.error(error);
  }
};

export const deleteArticleCategoryService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  try {
    const response = await DELETE("crud/article_category", accessToken, id);

    SwalAlertBasic({ icon: "success", text: response.data.message });
    setRefreshData(false);
    handleCloseModal();
  } catch (error) {
    console.error("Delete Failed:", error);
    throw error;
  }
};
