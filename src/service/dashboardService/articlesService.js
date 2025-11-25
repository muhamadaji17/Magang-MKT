/** @format */

import { DELETE, GET, POST, PUT } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateEndpointWithQuery } from "../generateEndpointWithQuery";
import { generateHeaders } from "../generateHeaders";

export const getArticlesService = async (accessToken, extraOptions) => {
  const { setDatasArticle, setRefreshData, searchQuery } = extraOptions;
  const queryParams = generateEndpointWithQuery(searchQuery);
  try {
    const response = await GET(`crud/article/by?${queryParams}`, accessToken);
    const payload = response.data.payload.map((data) => ({
      ...data,
      article_img: `http://${data.article_img}`,
    }));

    setDatasArticle(payload);
    setRefreshData(true);
  } catch (error) {
    console.error(error);
  }
};

export const getArticleByIdService = async (id, extraOptions) => {
  const { setDatasDetailArticles, accessToken } = extraOptions;

  try {
    const response = await GET(`crud/article/getone/${id}`, accessToken);
    setDatasDetailArticles(response.data.payload);
  } catch (error) {
    console.error(error);
  }
};

export const addArticlesService = async (datas, extraOptions) => {
  const { accessToken, navigate, setLoadingButton } = extraOptions;
  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });

  try {
    const response = await POST(
      "crud/article",
      {
        ...datas,
        article_img: datas.article_img[0],
        article_thumbnail_img: datas.article_thumbnail_img[0],
      },
      headers
    );

    if (response.data.success) {
      SwalAlertBasic({ icon: "success", text: response.data.message });
      navigate("/articles");
      setLoadingButton(false);
    }
  } catch (error) {
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
    console.error(error);
    setLoadingButton(false);
  }
};

export const updateArticlesService = async (datas, extraOptions) => {
  const { accessToken, navigate, setLoadingButton } = extraOptions;
  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });

  try {
    const response = await PUT(
      `crud/article`,
      {
        ...datas,

        article_img:
          typeof datas.article_img === "string"
            ? datas?.article_img
            : datas?.article_img[0],

        article_thumbnail_img:
          typeof datas.article_thumbnail_img === "string"
            ? datas?.article_thumbnail_img
            : datas?.article_thumbnail_img[0],
      },
      headers
    );

    if (response.data.success || response.data.status) {
      SwalAlertBasic({ icon: "success", text: response.data.message });
      navigate("/articles");
      setLoadingButton(false);
    }
  } catch (error) {
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
    console.error(error);
    setLoadingButton(false);
  }
};

export const updateArticlesStatusService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData } = extraOptions;
  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/article", datas, headers);

    if (response.data.status || response.data.success) {
      SwalAlertBasic({ icon: "success", text: response.data.message });
      setRefreshData(false);
    }
  } catch (error) {
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
    console.error(error);
  }
};

export const deleteArticlesService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  try {
    const response = await DELETE("crud/article", accessToken, id);
    if (response.data.status || response.data.success) {
      SwalAlertBasic({ icon: "success", text: response.data.message });
      setRefreshData(false);
      handleCloseModal();
    }
  } catch (error) {
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
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
      label: data?.article_category_name_en?.replace(/^\w/, (m) =>
        m.toUpperCase()
      ),
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
    SwalAlertBasic({ icon: "error", text: error.response.data.message });
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
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
    console.error(error);
  }
};

export const deleteArticleCategoryService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  try {
    const response = await DELETE("crud/article_category", accessToken, id);

    if (response.data.status) {
      SwalAlertBasic({ icon: "success", text: response.data.message });
      setRefreshData(false);
      handleCloseModal();
    }
  } catch (error) {
    console.error("Delete Failed:", error);
    if (error.response.data.responseCode === 401) {
      SwalAlertBasic({
        icon: "error",
        text: "Delete Failed, Cuz have a children!",
      });
    }

    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
    handleCloseModal();
    throw error;
  }
};
