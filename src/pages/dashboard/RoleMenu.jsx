import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useRoleMenuHook } from "../../hook";
import { configTableRole } from "../../pattern";

const RoleMenuPage = () => {
  const {
    stateShowModal,
    dataRow,
    setDataRow,
    submitType,
    accessToken,
    datasRoleMenu,
  } = useRoleMenuHook();

  return (
    <>
      <HeaderContent title={"Role"} handleOpen={stateShowModal.handleShow} />

      <Table
        datasTable={[]}
        dataRow={dataRow}
        configTable={configTableRole}
        // stateShowModal={stateShowModal}
        title={"Role Menu"}
        // isLoading={isLoading}
        // handleSearch={handleSearch(setSearchQuery)}
        // inputForm={
        //   submitType === "add"
        //     ? inputAddRole
        //     : inputEditRole(dataRow, datasRole)
        // }
        // submitType={submitType}
        // handleService={
        //   submitType === "add"
        //     ? handleAddRole(extraOptions)
        //     : submitType === "edit"
        //     ? handleEditRole(extraOptions, dataRow)
        //     : submitType === "delete"
        //     ? handleDeleteRole(extraOptions)
        //     : null
        // }
      />
    </>
  );
};

export default RoleMenuPage;
