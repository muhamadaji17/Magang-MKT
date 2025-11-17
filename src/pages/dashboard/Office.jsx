import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import {
  configTableOffice,
  handleSearch,
  inputAddOffice,
  inputEditOffice,
} from "../../pattern";
import { useOfficeHook } from "../../hook";
import {
  handleAddOffice,
  handleDeleteOffice,
  handleEditOffice,
} from "../../service";
import { se } from "date-fns/locale";

const Office = () => {
  const {
    stateShowModal,
    dataRow,
    submitType,
    setSearchQuery,
    datasOffice,
    extraOptions,
    getCityService,
    setDatasCity,
    datasCity,
    accessToken,
    isLoading,
  } = useOfficeHook();

  return (
    <>
      <HeaderContent
        title={"Office"}
        handleOpen={stateShowModal.handleShow}
        handleAPI={() =>
          getCityService(accessToken, { setDatasCity, searchQuery: {} })
        }
      />

      <Table
        datasTable={datasOffice}
        dataRow={dataRow}
        configTable={configTableOffice}
        stateShowModal={stateShowModal}
        title={"Office"}
        isLoading={isLoading}
        handleSearch={handleSearch(setSearchQuery)}
        handleAPI={() => {
          getCityService(accessToken, { setDatasCity, searchQuery: {} });
        }}
        inputForm={
          submitType === "add"
            ? inputAddOffice(datasCity)
            : inputEditOffice(dataRow, datasCity)
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddOffice(extraOptions)
            : submitType === "edit"
            ? handleEditOffice(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteOffice(extraOptions)
            : null
        }
      />
    </>
  );
};

export default Office;
