import { useNavigate, useParams } from "react-router-dom";
import { Form, HeaderContent } from "../../components/molecules";
import { CardLayout } from "../../components/layouts";
import { inputAddArticle, inputEditArticle } from "../../pattern";
import { useEffect } from "react";
import { getArticleCategoryService, handleAddArticle } from "../../service";
import { useData, useGlobalHook } from "../../hook";

const ArticleDetail = () => {
  const { action } = useParams();
  const title = `${action.replace(/^\s*\w/, (c) => c.toUpperCase())} Article`;
  const { accessToken, setRefreshData, handleCloseModal } = useGlobalHook();
  const { datasArticleCategory, setDatasArticleCategory } = useData();
  const navigate = useNavigate();

  const extraOptions = {
    setRefreshData,
    accessToken,
    handleCloseModal,
    navigate,
  };

  useEffect(() => {
    Promise.all([
      getArticleCategoryService(accessToken, {
        setDatasArticleCategory,
        searchQuery: {},
        setRefreshData,
      }),
    ]);
  }, []);

  return (
    <>
      <HeaderContent title={title} hiddenButton />

      <CardLayout>
        <Form
          configInput={
            action === "create"
              ? inputAddArticle(datasArticleCategory)
              : inputEditArticle(datasArticleCategory)
          }
          buttonText={action === "create" ? "Create" : "Update"}
          handleSubmitData={
            action === "create" ? handleAddArticle(extraOptions) : null
          }
        />
      </CardLayout>
    </>
  );
};

export default ArticleDetail;
