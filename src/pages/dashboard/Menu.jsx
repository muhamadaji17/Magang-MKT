/** @format */

import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useMenuHook } from "../../hook";
import {
  configTableMenu,
  handleSearch,
  inputAddMenu,
  inputEditMenu,
} from "../../pattern";
import { handleEditMenu, handleAddMenu } from "../../service";
import { deleteMenuService } from "../../service/dashboardService/menuService";

const MenuPage = () => {
  const {
    stateShowModal,
    extraOptions,
    setSearchQuery,
    submitType,
    dataRow,
    isLoading,
    dataMenu,
  } = useMenuHook();

  return (
    <>
      <HeaderContent title={"Menu"} handleOpen={stateShowModal.handleShow} />

      <Table
        datasTable={dataMenu}
        dataRow={dataRow}
        isLoading={isLoading}
        configTable={configTableMenu}
        stateShowModal={stateShowModal}
        title={"Menu"}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add"
            ? inputAddMenu(dataMenu)
            : inputEditMenu(dataRow, dataMenu)
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddMenu(extraOptions)
            : submitType === "edit"
            ? handleEditMenu(extraOptions, dataRow)
            : submitType === "delete"
            ? deleteMenuService(dataRow.id, extraOptions)
            : null
        }
      />
    </>
  );
};

export default MenuPage;
