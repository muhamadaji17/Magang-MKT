import {
  handleAddProvince,
  handleEditProvince,
  handleDeleteProvince,
} from "../../service";
import { useProvinceHook } from "../../hook";
import { Table } from "../../components/organism";
import {
  configTableProvince,
  handleSearch,
  inputAddProvince,
  inputEditProvince,
} from "../../pattern";
import { HeaderContent } from "../../components/molecules";

const Province = () => {
  const {
    datasProvince,
    optionsSelect,
    submitType,
    extraOptions,
    dataRow,
    setSearchQuery,
    stateShowModal,
  } = useProvinceHook();

  return (
    <>
      <HeaderContent
        title={"Province"}
        handleOpen={stateShowModal?.handleShow}
      />
      <Table
        datasTable={datasProvince}
        dataRow={dataRow}
        configTable={configTableProvince}
        title={"Province"}
        stateShowModal={stateShowModal}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add"
            ? inputAddProvince(optionsSelect)
            : inputEditProvince(dataRow, optionsSelect)
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddProvince(extraOptions)
            : submitType === "edit"
            ? handleEditProvince(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteProvince(extraOptions)
            : null
        }
      />
    </>
  );
};

export default Province;
