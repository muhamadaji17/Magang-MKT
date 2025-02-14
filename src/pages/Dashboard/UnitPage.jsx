import { Table } from "../../component/organism";
import {
  handleSearch,
  handleShowModal,
  tableColumnUnit,
  inputAddUnit,
  inputEditUnit,
  handleSubmitData,
} from "../../pattern";
import { unitService } from "../../service";
import { Spinner } from "../../utils";
import { HeaderContent } from "../../component/molecules";
import { useUnitHook } from "../../hook";

const UnitPage = () => {
  const {
    datas,
    accessToken,
    loading,
    showModal,
    setShowModal,
    showModalWithId,
    dataDepartement,
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
        handleShowModal={(typeModal) => {
          handleShowModal(setShowModal);
          setTypeModal(typeModal);
        }}
        inputDataForm={inputAddUnit(dataDepartement)}
        handleSubmitData={(data, resetField, setLoading) =>
          handleSubmitData({
            data,
            postData: unitService.add,
            resetField,
            handleShowModal: () => handleShowModal(setShowModal),
            setLoading,
            setUpdateData,
            accessToken,
          })
        }
      />
      {!loading ? (
        <Table
          dataTable={datas}
          searchQuery={searchQuery}
          tableConfig={tableColumnUnit}
          service={unitService}
          dataForm={inputEditUnit(getDataColumn, dataDepartement)}
          dataColumn={getDataColumn}
          typeModal={typeModal}
          showModal={showModalWithId}
          setUpdateData={setUpdateData}
          handleSearch={(value, key) =>
            handleSearch(value, key, setSearchQuery)
          }
          handleShowModal={(data, typeModal) => {
            handleShowModal(setShowModalWithId);
            setTypeModal(typeModal);
            setGetDataColumn({ ...data, name: data?.nama_unit });
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
