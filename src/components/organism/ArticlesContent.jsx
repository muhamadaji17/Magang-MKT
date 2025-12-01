import { useNavigate } from "react-router-dom";
import { CardLayout, ModalLayout } from "../layouts";
import { Card, ConfirmDelete } from "../molecules";
import { Tab, Tabs } from "./Tabs";
import {
  handleDeleteArticle,
  updateArticlesStatusService,
} from "../../service";
import { SwalAlertConfirm } from "../../utils/alert";
import { handleSubmitData } from "../../pattern";

const ArticlesContent = ({
  datasArticleCategory,
  datasArticle,
  handleOpenModal,
  dataRow,
  isLoading,
  extraOptions,
  handleCloseModal,
  isModalOpen,
  submitType,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <CardLayout>
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="loader" />
          </div>
        ) : datasArticleCategory.length > 0 ? (
          <Tabs defaultTab={datasArticleCategory[0]?.value}>
            {datasArticleCategory.map((group, index) => (
              <Tab key={index} id={group?.value} label={group.label}>
                <div key={index} className="space-y-6">
                  {/* Section title */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-3">
                      {group.label}
                    </h3>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {datasArticle.filter(
                      (article) => article.id_article_category === group.value
                    ) ? (
                      datasArticle
                        .filter(
                          (article) =>
                            article.id_article_category === group.value
                        )
                        .map((article, i) => (
                          <Card
                            key={i}
                            status={article.status}
                            img={article.article_img}
                            title={article.article_title_en}
                            handleUpdateStatus={
                              // () =>
                              // handleUpdateStatus({
                              //   status: !article.status,
                              //   id: article.id_article,
                              // })

                              () =>
                                SwalAlertConfirm({
                                  title: "Change Status Article",
                                  text: "Are you sure to change status article?",
                                  confirmButtonText: "Yes, change it!",
                                  handleConfirm: () =>
                                    handleSubmitData(
                                      {
                                        status: !article.status,
                                        id: article.id_article,
                                      },
                                      updateArticlesStatusService,
                                      extraOptions
                                    ),
                                })
                            }
                            handleUpdate={() => {
                              sessionStorage.setItem("id", article.id_article);
                              navigate("/articles/update");
                            }}
                            content={article.article_thumbnail_content_en}
                            handleDelete={() =>
                              handleOpenModal("delete", article)
                            }
                          />
                        ))
                    ) : (
                      <span className="text-base block text-center">
                        No data available
                      </span>
                    )}
                  </div>
                </div>
              </Tab>
            ))}
          </Tabs>
        ) : (
          <span className="text-base block text-center">No data available</span>
        )}
      </CardLayout>

      <ModalLayout
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        submitType={submitType}
        closeButton={submitType !== "delete"}
      >
        {submitType === "delete" ? (
          <ConfirmDelete
            dataRow={dataRow}
            handleCloseModal={handleCloseModal}
            onConfirm={handleDeleteArticle(dataRow.id_article, extraOptions)}
          />
        ) : null}
      </ModalLayout>
    </>
  );
};

export default ArticlesContent;
