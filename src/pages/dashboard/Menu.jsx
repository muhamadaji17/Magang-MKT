/** @format */

import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useCityHook, useMenuHook } from "../../hook";
import {
  configTableCity,
  configTableMenu,
  handleSearch,
  inputAddCity,
  inputAddMenu,
  inputEditCity,
  inputEditMenu,
} from "../../pattern";
import {
  addMenuService,
  handleAddCity,
  handleDeleteCity,
  handleEditCity,
  updateMenuService,
} from "../../service";

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
        handleService={(e) =>
          submitType === "add"
            ? addMenuService(e, extraOptions)
            : submitType === "edit"
            ? updateMenuService(e, extraOptions, dataRow.id)
            : submitType === "delete"
            ? handleDeleteCity(extraOptions)
            : null
        }
      />
    </>
  );
};

export default MenuPage;
