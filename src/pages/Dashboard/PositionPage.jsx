import { HeaderContent } from "../../component/molecules";
import { Table } from "../../component/organism";
import { usePositionHook } from "../../hook";
import {
  handleSearch,
  handleShowModal,
  handleSubmitData,
  inputAddPosition,
  inputEditPosition,
  tableColumnPosition,
} from "../../pattern";
import { positionService } from "../../service";
import { Spinner } from "../../utils";

const PositionPage = () => {
  const {
    accessToken,
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
        inputDataForm={inputAddPosition}
        handleSubmitData={(data, resetField, setLoading) =>
          handleSubmitData({
            data,
            postData: positionService.add,
            resetField,
            handleShowModal: () => handleShowModal(setShowModal),
            setLoading,
            setUpdateData,
            accessToken,
          })
        }
        handleShowModal={(typeModal) => {
          handleShowModal(setShowModal);
          setTypeModal(typeModal);
        }}
      />

      {!loading ? (
        <Table
          dataTable={datas}
          searchQuery={searchQuery}
          tableConfig={tableColumnPosition}
          dataColumn={getDataColumn}
          typeModal={typeModal}
          dataForm={inputEditPosition(getDataColumn)}
          service={positionService}
          showModal={showModalWithId}
          setUpdateData={setUpdateData}
          handleSearch={(value, key) =>
            handleSearch(value, key, setSearchQuery)
          }
          handleShowModal={(data, typeModal) => {
            handleShowModal(setShowModalWithId);
            setTypeModal(typeModal);
            setGetDataColumn({ ...data, name: data?.nama_jabatan });
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
