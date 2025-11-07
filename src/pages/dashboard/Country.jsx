import { HeaderContent } from "../../components/molecules";
import { useCountryHook } from "../../hook";
import { Table } from "../../components/organism";
import {
  configTableCountry,
  handleSearch,
  inputAddCountry,
  inputEditCountry,
} from "../../pattern";
import {
  handleAddCountry,
  handleDeleteCountry,
  handleEditCountry,
} from "../../service";

const Country = () => {
  const {
    datasCountry,
    submitType,
    dataRow,
    extraOptions,
    stateShowModal,
    setSearchQuery,
  } = useCountryHook();

  return (
    <>
      <HeaderContent title={"Country"} handleOpen={stateShowModal.handleShow} />

      <Table
        datasTable={datasCountry}
        dataRow={dataRow}
        configTable={configTableCountry}
        stateShowModal={stateShowModal}
        title={"Country"}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add" ? inputAddCountry : inputEditCountry(dataRow)
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddCountry(extraOptions)
            : submitType === "edit"
            ? handleEditCountry(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteCountry(extraOptions)
            : null
        }
      />
    </>
  );
};

export default Country;
