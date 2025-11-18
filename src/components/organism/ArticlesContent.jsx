import { useNavigate } from "react-router-dom";
import { CardLayout, ModalLayout } from "../layouts";
import { Card, ConfirmDelete } from "../molecules";
import { Tab, Tabs } from "./Tabs";

const ArticlesContent = ({
  datasArticleCategory,
  datasArticle,
  handleOpenModal,
  dataRow,
  handleCloseModal,
  isModalOpen,
  submitType,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <CardLayout>
        {datasArticleCategory.length > 0 && (
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
                    {datasArticle
                      .filter(
                        (article) => article.id_article_category === group.value
                      )
                      .map((article, i) => (
                        <Card
                          key={i}
                          img={article.article_img}
                          title={article.article_title}
                          handleUpdate={() => {
                            sessionStorage.setItem("id", article.id_article);
                            navigate("/articles/update");
                          }}
                          content={article.article_content_en}
                          handleDelete={() =>
                            handleOpenModal("delete", dataRow)
                          }
                        />
                      ))}
                  </div>
                </div>
              </Tab>
            ))}
          </Tabs>
        )}
      </CardLayout>

      <ModalLayout
        isModalOpen={isModalOpen}
        title={submitType === "add" ? "Add About" : "Edit About"}
        handleCloseModal={handleCloseModal}
        submitType={submitType}
        closeButton={submitType !== "delete"}
      >
        {submitType === "delete" ? (
          <ConfirmDelete
            dataRow={{ ...dataRow, title: dataRow.about_meta }}
            handleCloseModal={handleCloseModal}
            // onConfirm={handleDeleteAbout(extraOptions, dataRow)}
          />
        ) : null}
      </ModalLayout>
    </>
  );
};

export default ArticlesContent;
