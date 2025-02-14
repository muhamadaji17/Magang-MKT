import { useDepartementHook } from "../../hook";
import { Table } from "../../component/organism";
import { HeaderContent } from "../../component/molecules";
import { Spinner } from "../../utils";
import {
  tableColumnDepartement,
  handleSearch,
  handleShowModal,
  inputAddDepartement,
  inputEditDepartement,
  handleSubmitData,
} from "../../pattern";
import { departementService } from "../../service";

const DepartemenPage = () => {
  const {
    datas,
    accessToken,
    showModal,
    setShowModal,
    showModalWithId,
    setShowModalWithId,
    setUpdateData,
    loading,
    searchQuery,
    setSearchQuery,
    getDataColumn,
    setGetDataColumn,
    typeModal,
    setTypeModal,
  } = useDepartementHook();

  return (
    <div className="">
      <HeaderContent
        showModal={showModal}
        inputDataForm={inputAddDepartement}
        handleShowModal={(typeModal) => {
          handleShowModal(setShowModal);
          setTypeModal(typeModal);
        }}
        handleSubmitData={(data, resetField, setLoading) =>
          handleSubmitData({
            data,
            postData: departementService.add,
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
          tableConfig={tableColumnDepartement}
          dataColumn={getDataColumn}
          typeModal={typeModal}
          setSearchQuery={setSearchQuery}
          service={departementService}
          dataForm={inputEditDepartement(getDataColumn)}
          showModal={showModalWithId}
          handleSearch={(value, key) =>
            handleSearch(value, key, setSearchQuery)
          }
          setUpdateData={setUpdateData}
          handleShowModal={(data, typeModal) => {
            handleShowModal(setShowModalWithId);
            setTypeModal(typeModal);
            setGetDataColumn({ ...data, name: data?.nama_departement });
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

export default DepartemenPage;
