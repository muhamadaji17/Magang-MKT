import { DELETE, GET, POST, PUT } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateEndpointWithQuery } from "../generateEndpointWithQuery";
import { generateHeaders } from "../generateHeaders";

export const getArticlesService = async (accessToken, extraOptions) => {
  const { setDatasArticle, setRefreshData, searchQuery } = extraOptions;
  const queryParams = generateEndpointWithQuery(searchQuery);
  try {
    const response = await GET(`crud/article/by?${queryParams}`, accessToken);
    const payload = response.data.payload;

    setDatasArticle(payload);
    setRefreshData(true);
  } catch (error) {
    console.error(error);
  }
};

export const addArticlesService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, navigate } =
    extraOptions;
  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });

  try {
    const response = await POST(
      "crud/article",
      { ...datas, article_img: datas.article_img[0] },
      headers
    );
    if (response.data.success) {
      SwalAlertBasic({ icon: "success", text: response.data.message });
      setRefreshData(false);
      handleCloseModal();
      navigate("/articles");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getArticleCategoryService = async (accessToken, extraOptions) => {
  const { setDatasArticleCategory, setRefreshData, searchQuery } = extraOptions;
  const queryParams = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(
      `crud/article_category/by?${queryParams}`,
      accessToken
    );
    const payload = response.data.payload.map((data) => ({
      ...data,
      label: data.article_category_name,
      value: data.id_article_category,
    }));
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
