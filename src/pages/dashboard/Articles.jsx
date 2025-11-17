import { Form, Link } from "react-router-dom";
import { Button } from "../../components/atom";
import { CardLayout, ModalLayout } from "../../components/layouts";
import {
  ConfirmDelete,
  HeaderContent,
  ShortenedCharacter,
} from "../../components/molecules";
import { articleGroups } from "../../utils/dummy";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useData, useGlobalHook } from "../../hook";
import { Tabs } from "../../components/organism";
import { Tab } from "../../components/organism/Tabs";
import { useEffect } from "react";
import { getArticleCategoryService, getArticlesService } from "../../service";

const Articles = () => {
  const {
    submitType,
    handleOpenModal,
    handleCloseModal,
    isModalOpen,
    refreshData,
    dataRow,
    accessToken,
    setRefreshData,
  } = useGlobalHook();
  const {
    datasArticle,
    setDatasArticle,
    datasArticleCategory,
    setDatasArticleCategory,
  } = useData();

  useEffect(() => {
    Promise.all([
      getArticlesService(accessToken, {
        setDatasArticle,
        setRefreshData,
        searchQuery: {},
      }),
      getArticleCategoryService(accessToken, {
        setDatasArticleCategory,
        setRefreshData,
        searchQuery: {},
      }),
    ]);
  }, [refreshData]);

  console.log(datasArticle);

  return (
    <>
      <HeaderContent title={"Articles"} path={"/articles/create"} />

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
                    {datasArticle.map((article, i) => (
                      <div
                        key={i}
                        className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
                      >
                        {/* Thumbnail */}
                        <div className="overflow-hidden">
                          <img
                            src={article?.article_img}
                            alt={"thumbnail"}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 justify-between">
                          <div className="p-4 space-y-2 ">
                            <h4 className="text-lg font-semibold line-clamp-2 text-gray-800 group-hover:text-blue-800">
                              {article?.article_title?.en}
                            </h4>
                            <ShortenedCharacter
                              sinopsis={article?.description?.en}
                            />

                            <div className="pt-2 flex items-center justify-between text-xs text-gray-400">
                              <span>{article?.author}</span>
                              <span>{article?.date}</span>
                            </div>
                          </div>

                          {/* Footer (icon section) */}
                          <div className="flex items-center justify-between text-xs text-gray-600 border-t border-gray-300 py-2 px-4">
                            <div className="text-lg space-x-3">
                              <Link
                                className={"hover:text-blue-500 inline-block"}
                                to={"/articles/update"}
                              >
                                <FaRegEdit />
                              </Link>
                              <Button
                                className={"hover:text-red-500"}
                                onClick={() =>
                                  handleOpenModal("delete", dataRow)
                                }
                              >
                                <FaRegTrashAlt />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>
            ))}
          </Tabs>
        )}
      </CardLayout>

      <CardLayout>
        <Tabs defaultTab="technology">
          {articleGroups.map((group, index) => (
            <Tab
              key={index}
              id={group.title.toLocaleLowerCase()}
              label={group.title}
            >
              <div key={index} className="space-y-6">
                {/* Section title */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-3">
                    {group.title}
                  </h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {group.articles.map((article, i) => (
                    <div
                      key={i}
                      className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      {/* Thumbnail */}
                      <div className="overflow-hidden">
                        <img
                          src={article.thumbnail}
                          alt={"thumbnail"}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 justify-between">
                        <div className="p-4 space-y-2 ">
                          <h4 className="text-lg font-semibold line-clamp-2 text-gray-800 group-hover:text-blue-800">
                            {article.title.en}
                          </h4>
                          <ShortenedCharacter
                            sinopsis={article.description.en}
                          />

                          <div className="pt-2 flex items-center justify-between text-xs text-gray-400">
                            <span>{article.author}</span>
                            <span>{article.date}</span>
                          </div>
                        </div>

                        {/* Footer (icon section) */}
                        <div className="flex items-center justify-between text-xs text-gray-600 border-t border-gray-300 py-2 px-4">
                          <div className="text-lg space-x-3">
                            <Link
                              className={"hover:text-blue-500 inline-block"}
                              to={"/articles/update"}
                            >
                              <FaRegEdit />
                            </Link>
                            <Button
                              className={"hover:text-red-500"}
                              onClick={() => handleOpenModal("delete", dataRow)}
                            >
                              <FaRegTrashAlt />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
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
        ) : (
          <Form
            // configInput={
            //   submitType === "add" ? inputAddAbout : inputEditAbout(dataRow)
            // }
            buttonText={"Submit"}
            // handleSubmitData={
            //   submitType === "add"
            //     ? handleAddAbout(extraOptions)
            //     : handleEditAbout(extraOptions, dataRow)
            // }
          />
        )}
      </ModalLayout>
    </>
  );
};

export default Articles;
