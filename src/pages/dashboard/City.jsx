import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useCityHook } from "../../hook";
import {
  configTableCity,
  handleSearch,
  inputAddCity,
  inputEditCity,
} from "../../pattern";
import { handleAddCity, handleDeleteCity, handleEditCity } from "../../service";

const City = () => {
  const {
    datasCity,
    stateShowModal,
    extraOptions,
    setSearchQuery,
    optionsSelect,
    submitType,
    dataRow,
  } = useCityHook();

  return (
    <>
      <HeaderContent title={"City"} handleOpen={stateShowModal.handleShow} />

      <Table
        datasTable={datasCity}
        dataRow={dataRow}
        configTable={configTableCity}
        stateShowModal={stateShowModal}
        title={"City"}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add"
            ? inputAddCity(optionsSelect)
            : inputEditCity(dataRow, optionsSelect)
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddCity(extraOptions)
            : submitType === "edit"
            ? handleEditCity(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteCity(extraOptions)
            : null
        }
      />
    </>
  );
};

export default City;
