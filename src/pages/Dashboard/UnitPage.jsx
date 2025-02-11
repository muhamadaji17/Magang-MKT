import { Table } from "../../component/organism";
import {
  handleSearch,
  handleShowModal,
  tableColumnUnit,
  inputAddUnit,
  inputEditUnit,
} from "../../pattern";
import { departementService, unitService } from "../../service";
import { Spinner } from "../../utils";
import { HeaderContent } from "../../component/molecules";
import { useUnitHook } from "../../hook";

const UnitPage = () => {
  const {
    datas,
    loading,
    showModal,
    setShowModal,
    showModalWithId,
    setShowModalWithId,
    searchQuery,
    setSearchQuery,
    getDataColumn,
    setGetDataColumn,
    typeModal,
    setTypeModal,
    setUpdateData,
  } = useUnitHook();

  return (
    <div>
      <HeaderContent
        showModal={showModal}
        subDataService={departementService.get}
        setShowModal={setShowModal}
        setUpdateData={setUpdateData}
        service={unitService.add}
        inputDataForm={inputAddUnit}
        handleSearch={(e) => handleSearch(e.target.value, setSearchQuery)}
        inputValue={searchQuery}
      />
      {!loading ? (
        <Table
          dataTable={datas}
          subDataService={departementService.get}
          searchQuery={searchQuery}
          tableConfig={tableColumnUnit}
          service={unitService}
          dataColumn={getDataColumn}
          typeModal={typeModal}
          dataForm={inputEditUnit(getDataColumn)}
          showModal={showModalWithId}
          setShowModal={setShowModalWithId}
          setUpdateData={setUpdateData}
          handleShowModal={(data, typeModal) => {
            handleShowModal(setShowModalWithId);
            setTypeModal(typeModal);

            setGetDataColumn({ ...data, name: data.nama_unit });
          }}
        />
      ) : (
        <Spinner
          className={"flex items-center justify-center h-1/2 mt-36"}
          size={"w-20 h-20"}
        />
      )}
    </div>
  );
};

export default UnitPage;
