import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useUserHook } from "../../hook";
import {
  getRolesService,
  handleAddUser,
  handleDeleteUser,
  handleEditUser,
} from "../../service";
import {
  configTableUser,
  handleSearch,
  inputAddUser,
  inputEditUser,
} from "../../pattern";

const User = () => {
  const {
    stateShowModal,
    accessToken,
    searchQuery,
    setRefreshData,
    setDatasRole,
    datasUser,
    dataRow,
    setSearchQuery,
    datasRole,
    submitType,
    isLoading,
    extraOptions,
  } = useUserHook();

  return (
    <>
      <HeaderContent
        title={"User"}
        handleOpen={stateShowModal.handleShow}
        handleAPI={() =>
          getRolesService(accessToken, {
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
        isLoading={isLoading}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add"
            ? inputAddUser(datasRole)
            : inputEditUser(dataRow, datasRole)
        }
        handleAPI={() =>
          getRolesService(accessToken, {
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
            : submitType === "delete"
            ? handleDeleteUser(extraOptions)
            : null
        }
      />
    </>
  );
};

export default User;
