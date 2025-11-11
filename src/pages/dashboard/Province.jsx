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
    submitType,
    extraOptions,
    dataRow,
    setSearchQuery,
    stateShowModal,
    accessToken,
    getCountryService,
    datasCountry,
    setDatasCountry,
    setRefreshData,
  } = useProvinceHook();

  return (
    <>
      <HeaderContent
        title={"Province"}
        handleOpen={stateShowModal?.handleShow}
        handleAPI={() =>
          getCountryService(accessToken, {
            setDatasCountry,
            setRefreshData,
            searchQuery: {},
          })
        }
      />
      <Table
        datasTable={datasProvince}
        dataRow={dataRow}
        configTable={configTableProvince}
        title={"Province"}
        stateShowModal={stateShowModal}
        handleSearch={handleSearch(setSearchQuery)}
        handleAPI={() =>
          getCountryService(accessToken, {
            setDatasCountry,
            setRefreshData,
            searchQuery: {},
          })
        }
        inputForm={
          submitType === "add"
            ? inputAddProvince(datasCountry)
            : inputEditProvince(dataRow, datasCountry)
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
