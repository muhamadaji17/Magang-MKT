/** @format */

import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useFilmsHook } from "../../hook";
import {
  getRatingService,
  handleAddFilms,
  handleDeleteFilms,
  handleEditFilms,
} from "../../service";
import {
  configTableFilms,
  handleSearch,
  inputAddFilms,
  inputEditFilms,
} from "../../pattern";

const Films = () => {
  const {
    datasFilms,
    dataRow,
    submitType,
    setSearchQuery,
    extraOptions,
    stateShowModal,
    searchQuery,
    accessToken,
    datasRating,
    setDatasRating,
    setRefreshData,
    isLoading,
  } = useFilmsHook();

  return (
    <>
      <HeaderContent
        title={"Film"}
        handleOpen={stateShowModal.handleShow}
        handleAPI={() =>
          getRatingService(accessToken, {
            searchQuery,
            setDatasRating,
            setRefreshData,
          })
        }
      />

      <Table
        datasTable={datasFilms}
        title={"Film"}
        isLoading={isLoading}
        dataRow={dataRow}
        configTable={configTableFilms}
        pathDetail={"/films/detail?nama="}
        stateShowModal={stateShowModal}
        handleSearch={handleSearch(setSearchQuery)}
        handleAPI={() =>
          getRatingService(accessToken, {
            searchQuery,
            setDatasRating,
            setRefreshData,
          })
        }
        inputForm={
          submitType === "add"
            ? inputAddFilms(datasRating)
            : inputEditFilms(dataRow, datasRating)
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddFilms(extraOptions)
            : submitType === "edit"
            ? handleEditFilms(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteFilms(extraOptions)
            : null
        }
      />
    </>
  );
};

export default Films;
