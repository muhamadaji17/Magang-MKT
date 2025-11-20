import { useNavigate, useParams } from "react-router-dom";
import { Form, HeaderContent } from "../../components/molecules";
import { CardLayout } from "../../components/layouts";
import { inputAddArticle, inputEditArticle } from "../../pattern";
import { useEffect } from "react";
import {
  getArticleByIdService,
  getArticleCategoryService,
  handleAddArticle,
} from "../../service";
import { useData, useGlobalHook } from "../../hook";

const ArticleDetail = () => {
  const { action } = useParams();
  const title = `${action.replace(/^\s*\w/, (c) => c.toUpperCase())} Article`;
  const { accessToken, setRefreshData, handleCloseModal } = useGlobalHook();
  const {
    datasArticleCategory,
    setDatasArticleCategory,
    datasDetailArticles,
    setDatasDetailArticles,
  } = useData();
  const navigate = useNavigate();
  const id = sessionStorage.getItem("id");

  const extraOptions = {
    accessToken,
    handleCloseModal,
    setDatasDetailArticles,
    navigate,
  };

  useEffect(() => {
    if (action === "update") {
      Promise.all(
        [
          getArticleCategoryService(accessToken, {
            setDatasArticleCategory,
            searchQuery: {},
            setRefreshData,
          }),
        ],
        getArticleByIdService(id, extraOptions)
      );
    } else {
      Promise.all([
        getArticleCategoryService(accessToken, {
          setDatasArticleCategory,
          searchQuery: {},
          setRefreshData,
        }),
      ]);
    }
  }, [action]);

  console.log(datasDetailArticles);

  return (
    <>
      <HeaderContent title={title} hiddenButton />

      {datasArticleCategory && (
        <CardLayout>
          <Form
            configInput={
              action === "create"
                ? inputAddArticle(datasArticleCategory)
                : inputEditArticle(datasArticleCategory, datasDetailArticles)
            }
            buttonText={action === "create" ? "Create" : "Update"}
            handleSubmitData={
              action === "create" ? handleAddArticle(extraOptions) : null
            }
          />
        </CardLayout>
      )}
    </>
  );
};

export default ArticleDetail;
