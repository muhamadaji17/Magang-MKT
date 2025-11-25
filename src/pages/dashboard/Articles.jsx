import { HeaderContent } from "../../components/molecules";
import { useArticles } from "../../hook";
import { ArticlesContent } from "../../components/organism";
import { SwalAlertConfirm } from "../../utils/alert";
import { handleSubmitData } from "../../pattern";
import {
  updateArticlesService,
  updateArticlesStatusService,
} from "../../service/dashboardService/articlesService";

const Articles = () => {
  const {
    dataRow,
    datasArticle,
    datasArticleCategory,
    handleCloseModal,
    handleOpenModal,
    submitType,
    isModalOpen,
    extraOptions,
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
        handleUpdateStatus={(datas) =>
          SwalAlertConfirm({
            title: "Change Status Article",
            text: "Are you sure to change status article?",
            confirmButtonText: "Yes, change it!",
            handleConfirm: () =>
              handleSubmitData(
                datas,
                updateArticlesStatusService,
                extraOptions
              ),
          })
        }
        isModalOpen={isModalOpen}
        extraOptions={extraOptions}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default Articles;
