import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useRoleMenuHook } from "../../hook";
import {
  configTableRoleMenu,
  handleSearch,
  inputAddRoleMenu,
  inputEditRoleMenu,
} from "../../pattern";
import {
  handleAddRoleMenu,
  handleDeleteRoleMenu,
  handleEditRoleMenu,
} from "../../service";

const RoleMenuPage = () => {
  const {
    stateShowModal,
    dataRow,
    submitType,
    extraOptions,
    setSearchQuery,
    dataMenu,
    datasRole,
    datasRoleMenu,
    isLoading,
    handleAPI,
  } = useRoleMenuHook();

  return (
    <>
      <HeaderContent
        title={"Role Menu"}
        handleOpen={stateShowModal.handleShow}
        handleAPI={handleAPI}
      />

      <Table
        datasTable={datasRoleMenu}
        dataRow={dataRow}
        configTable={configTableRoleMenu}
        stateShowModal={stateShowModal}
        title={"Role Menu"}
        isLoading={isLoading}
        handleAPI={handleAPI}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add"
            ? inputAddRoleMenu(dataMenu, datasRole)
            : inputEditRoleMenu(dataMenu, datasRole, dataRow)
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddRoleMenu(extraOptions)
            : submitType === "edit"
            ? handleEditRoleMenu(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteRoleMenu(extraOptions)
            : null
        }
      />
    </>
  );
};

export default RoleMenuPage;
