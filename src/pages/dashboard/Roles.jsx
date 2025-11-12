import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useRolesHook } from "../../hook";
import { handleAddRole, handleDeleteRole, handleEditRole } from "../../service";
import {
  configTableRole,
  handleSearch,
  inputAddRole,
  inputEditRole,
} from "../../pattern";

const Roles = () => {
  const {
    datasRole,
    stateShowModal,
    setSearchQuery,
    dataRow,
    submitType,
    isLoading,
    extraOptions,
  } = useRolesHook();

  return (
    <>
      <HeaderContent title={"Role"} handleOpen={stateShowModal.handleShow} />

      <Table
        datasTable={datasRole}
        dataRow={dataRow}
        configTable={configTableRole}
        stateShowModal={stateShowModal}
        title={"Role"}
        isLoading={isLoading}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add"
            ? inputAddRole
            : inputEditRole(dataRow, datasRole)
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddRole(extraOptions)
            : submitType === "edit"
            ? handleEditRole(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteRole(extraOptions)
            : null
        }
      />
    </>
  );
};

export default Roles;
