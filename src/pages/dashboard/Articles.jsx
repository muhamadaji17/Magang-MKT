import { HeaderContent } from "../../components/molecules";
import { useArticles } from "../../hook";
import { ArticlesContent } from "../../components/organism";

const Articles = () => {
  const {
    dataRow,
    datasArticle,
    datasArticleCategory,
    handleCloseModal,
    handleOpenModal,
    submitType,
    isModalOpen,
  } = useArticles();

  return (
    <>
      <HeaderContent title={"Articles"} path={"/articles/create"} />

      <ArticlesContent
        dataRow={dataRow}
        datasArticleCategory={datasArticleCategory}
        datasArticle={datasArticle}
        handleOpenModal={handleOpenModal}
        submitType={submitType}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default Articles;
