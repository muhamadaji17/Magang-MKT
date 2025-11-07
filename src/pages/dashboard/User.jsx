import { useEffect } from "react";
import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useData, useGlobalHook } from "../../hook";
import {
  getRoleService,
  getUserService,
  handleAddUser,
  handleEditUser,
} from "../../service";
import { configTableUser, inputAddUser, inputEditUser } from "../../pattern";

const User = () => {
  const {
    accessToken,
    dataRow,
    submitType,
    refreshData,
    stateShowSidebar,
    stateShowModal,
    setRefreshData,
    searchQuery,
    setSearchQuery,
    handleCloseModal,
  } = useGlobalHook();
  const { datasUser, setDatasUser, datasRole, setDatasRole } = useData();
  const extraOptions = { accessToken, setRefreshData, handleCloseModal };

  useEffect(() => {
    getUserService(accessToken, { setRefreshData, searchQuery, setDatasUser });
  }, [refreshData]);
  return (
    <>
      <HeaderContent
        title={"User"}
        handleOpen={stateShowModal.handleShow}
        handleAPI={() =>
          getRoleService(accessToken, {
            searchQuery,
            setDatasRole,
            setRefreshData,
          })
        }
      />

      <Table
        datasTable={datasUser}
        dataRow={dataRow}
        configTable={configTableUser}
        stateShowModal={stateShowModal}
        title={"User"}
        // handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add"
            ? inputAddUser(datasRole)
            : inputEditUser(dataRow, datasRole)
        }
        handleAPI={() =>
          getRoleService(accessToken, {
            searchQuery,
            setDatasRole,
            setRefreshData,
          })
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddUser(extraOptions)
            : submitType === "edit"
            ? handleEditUser(extraOptions, dataRow)
            : null
        }
        // handleService={
        //   submitType === "add"
        //     ? handleAddFilms(extraOptions)
        //     : submitType === "edit"
        //     ? handleEditFilms(extraOptions, dataRow)
        //     : submitType === "delete"
        //     ? handleDeleteFilms(extraOptions)
        //     : null
        // }
      />
    </>
  );
};

export default User;
