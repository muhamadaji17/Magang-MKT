import { HeaderContent } from "../../component/molecules";
import { Table } from "../../component/organism";
import { usePositionHook } from "../../hook";
import {
  handleSearch,
  handleShowModal,
  inputAddPosition,
  inputEditPosition,
  tableColumnPosition,
} from "../../pattern";
import { positionService } from "../../service";
import { Spinner } from "../../utils";

const PositionPage = () => {
  const {
    datas,
    loading,
    searchQuery,
    setSearchQuery,
    showModal,
    setShowModal,
    showModalWithId,
    setShowModalWithId,
    typeModal,
    setTypeModal,
    getDataColumn,
    setGetDataColumn,
    setUpdateData,
  } = usePositionHook();

  return (
    <div>
      <HeaderContent
        showModal={showModal}
        setShowModal={setShowModal}
        setUpdateData={setUpdateData}
        service={positionService.add}
        inputDataForm={inputAddPosition}
        handleSearch={(e) => handleSearch(e.target.value, setSearchQuery)}
        inputValue={searchQuery}
      />

      {!loading ? (
        <Table
          dataTable={datas}
          searchQuery={searchQuery}
          tableConfig={tableColumnPosition}
          service={positionService}
          dataColumn={getDataColumn}
          typeModal={typeModal}
          dataForm={inputEditPosition(getDataColumn)}
          showModal={showModalWithId}
          setShowModal={setShowModalWithId}
          setUpdateData={setUpdateData}
          handleShowModal={(data, typeModal) => {
            handleShowModal(setShowModalWithId);
            setTypeModal(typeModal);
            setGetDataColumn({ ...data, name: data.nama_jabatan });
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

export default PositionPage;
