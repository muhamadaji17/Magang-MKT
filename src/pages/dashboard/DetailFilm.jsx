/** @format */

import { useEffect, useState } from "react";
import {
  addCastingFilmService,
  getFilmByIdService,
  handleAddAbout,
  handleDeleteAbout,
  handleEditAbout,
} from "../../service";
import { useData, useGlobalHook } from "../../hook";
import { ConfirmDelete, Form, HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import {
  configTableFilms,
  handleSearch,
  inputAddAbout,
  inputAddCastingFilms,
  inputEditAbout,
} from "../../pattern";
import { FaInstagramSquare } from "react-icons/fa";
import { ModalLayout } from "../../components/layouts";

const DetailFilmPage = () => {
  const {
    accessToken,
    setRefreshData,
    dataRow,
    submitType,
    handleCloseModal,
    stateShowModal,
    setSearchQuery,
    handleOpenModal,
    isModalOpen,
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
  }, []);

  return (
    <>
      <HeaderContent title={"Detail Film"} handleOpen={handleOpenModal} />

      {/* <Table
        datasTable={[datasFilms]}
        dataRow={dataRow}
        configTable={configTableFilms}
        stateShowModal={stateShowModal}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add" ? inputAddCastingFilms(datasFilms) : null
        }
        submitType={submitType}
        title={"Detail Film"}
        handleService={(e) =>
          submitType === "add" ? addCastingFilmService(e, extraOptions) : null
        }
      /> */}
      {datasDetailFilms.casting_with_film?.map((data, index) => (
        <div className="grid grid-cols-4 gap-10" key={index}>
          <div className="bg-white">
            <img src="/images/poster/one-outs.jpg" className="rounded-md" />
            <div className="m-2">
              <h1 className="font-bold text-lg">Natasya Wilona</h1>
              <small>Melati</small>
              <div className="flex items-center">
                <p className="flex items-center gap-1">
                  {/* Instagram : <span>@Aji</span> */}
                  <FaInstagramSquare /> : <span>@Aji</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ModalLayout
        isModalOpen={isModalOpen}
        className={`${submitType !== "delete" && "w-[1000px]"}`}
        title={"Add Casting"}
        handleCloseModal={handleCloseModal}
        closeButton={submitType !== "delete"}
      >
        {submitType === "delete" ? (
          <ConfirmDelete
            dataRow={{ ...dataRow, title: dataRow.about_meta }}
            handleCloseModal={handleCloseModal}
            onConfirm={handleDeleteAbout(extraOptions, dataRow)}
          />
        ) : (
          <Form
            configInput={
              submitType === "add"
                ? inputAddCastingFilms(datasDetailFilms)
                : inputEditAbout(dataRow)
            }
            buttonText={"Submit"}
            handleSubmitData={(e) =>
              submitType === "add"
                ? addCastingFilmService(e, extraOptions)
                : handleEditAbout(extraOptions, dataRow)
            }
          />
        )}
      </ModalLayout>
    </>
  );
};

export default DetailFilmPage;
