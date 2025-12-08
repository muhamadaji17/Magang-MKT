/** @format */

import { useEffect } from "react";
import {
  getFilmByIdService,
  addCastingFilmService,
  updateCastingFilmService,
  deleteCastingFilmService,
} from "../../service";
import { useData, useGlobalHook } from "../../hook";
import { ConfirmDelete, Form, HeaderContent } from "../../components/molecules";
import { Tabs } from "../../components/organism";
import { inputAddCastingFilms, typeTabsCastingFilms } from "../../pattern";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { ModalLayout } from "../../components/layouts";
import { Tab } from "../../components/organism/Tabs";
import { Button } from "../../components/atom";
import { inputEditCastingFilms } from "../../pattern/modalPattern/inputCastingFilmsPattern";

const DetailFilmPage = () => {
  const {
    accessToken,
    setRefreshData,
    dataRow,
    submitType,
    handleCloseModal,
    handleOpenModal,
    isModalOpen,
    setDataRow,
    refreshData,
  } = useGlobalHook();

  const extraOptions = {
    accessToken,
    setRefreshData,
    handleCloseModal,
  };

  const { datasDetailFilms, setDatasDetailFilms } = useData();

  useEffect(() => {
    getFilmByIdService(accessToken, {
      searchQuery: {
        id: sessionStorage.getItem("id"),
      },
      setDatasDetailFilms,
      setRefreshData,
    });
  }, [refreshData]);
  // console.log(dataRow);

  return (
    <>
      <HeaderContent title={"Detail Film"} handleOpen={handleOpenModal} />

      <Tabs defaultTab="main_cast">
        {typeTabsCastingFilms.map((tab, index) => (
          <Tab key={index} id={tab.id} label={tab.title}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-3">
                {tab.title}
              </h3>
            </div>
            <div
              className="
  grid grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4  
  gap-6
"
            >
              {(datasDetailFilms.casting_with_film ?? [])
                .filter((c) => c.artis_kategori === tab.id)
                .map((c, i) => (
                  <div
                    key={i}
                    className="
          group bg-white rounded-xl overflow-hidden border border-gray-200 
          shadow-sm hover:shadow-lg
          transition-all duration-300 flex flex-col
        "
                  >
                    <img
                      src={
                        c.poster_casting_film
                          ? `http://${c.poster_casting_film}`
                          : "/images/cast-default.svg"
                      }
                      className="
            w-full h-90  transition-transform duration-500
          "
                    />

                    {/* Konten */}
                    <div className="p-3 flex-1">
                      <h1
                        className="
            font-semibold text-base md:text-lg 
            hover:text-blue-600 hover:underline cursor-pointer
          "
                      >
                        {c.nama_casting_film}
                      </h1>

                      <small className="text-gray-600">
                        {c.sebagai_casting_film || ""}
                      </small>
                    </div>

                    {/* Footer */}
                    <div
                      className="
          flex items-center justify-between 
          border-t border-gray-200 
          py-2 px-4 text-gray-600 text-sm
        "
                    >
                      <div className="flex items-center gap-3 text-lg">
                        <Button
                          className="hover:text-blue-500"
                          onClick={() => handleOpenModal("edit", setDataRow(c))}
                        >
                          <FaRegEdit />
                        </Button>

                        <Button
                          className="hover:text-red-500"
                          onClick={() =>
                            handleOpenModal("delete", setDataRow(c))
                          }
                        >
                          <FaRegTrashAlt />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Tab>
        ))}
      </Tabs>

      <ModalLayout
        isModalOpen={isModalOpen}
        className={`${submitType !== "delete" && "w-[1000px]"}`}
        title={
          submitType === "add"
            ? "Add Casting"
            : submitType === "edit"
            ? "Edit casting"
            : null
        }
        handleCloseModal={handleCloseModal}
        closeButton={submitType !== "delete"}
      >
        {submitType === "delete" ? (
          <ConfirmDelete
            dataRow={{ ...dataRow, title: dataRow.about_meta }}
            handleCloseModal={handleCloseModal}
            onConfirm={() => deleteCastingFilmService(dataRow, extraOptions)}
          />
        ) : (
          <Form
            configInput={
              submitType === "add"
                ? inputAddCastingFilms(datasDetailFilms)
                : inputEditCastingFilms(dataRow, datasDetailFilms)
            }
            buttonText={"Submit"}
            // handleSubmitData={(e) => console.log(e)}
            handleSubmitData={(e) =>
              submitType === "add"
                ? addCastingFilmService(e, extraOptions)
                : updateCastingFilmService(e, extraOptions)
            }
          />
        )}
      </ModalLayout>
    </>
  );
};

export default DetailFilmPage;
