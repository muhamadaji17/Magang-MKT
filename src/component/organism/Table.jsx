import { TableHead, TableBody, ConfirmDelete } from "../molecules";
import { LayoutModal } from "../layouts";
import { handleSubmitData } from "../../pattern";
import { Form } from "../organism/";
import { useAuthToken, useGlobalHook } from "../../hook";

const Table = ({
  dataTable,
  searchQuery,
  tableConfig,
  dataColumn,
  typeModal,
  dataForm,
  service,
  showModal,
  setShowModal,
  handleShowModal,
  subDataService,
  setUpdateData,
}) => {
  const accessToken = useAuthToken();
  const { loading } = useGlobalHook();

  return (
    <>
      <div className="">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <TableHead
              className={"text-xs text-white text-center bg-blue-700"}
              dataHead={tableConfig}
            />
            <TableBody
              dataTable={dataTable}
              tableConfig={tableConfig}
              handleShowModal={handleShowModal}
            />
          </table>

          {searchQuery !== "" && dataTable?.length === 0 ? (
            <div className="text-center p-40">
              <span className="font-bold">{`"${searchQuery}" `}</span>
              <span>Data tidak ditemukan.</span>
            </div>
          ) : searchQuery === "" && dataTable?.length === 0 && !loading ? (
            <div className="text-center p-40">
              <span>Tidak ada data.</span>
            </div>
          ) : null}
        </div>
      </div>

      <LayoutModal
        title={typeModal === "edit" && "Ubah Data"}
        show={showModal}
        setShowModal={setShowModal}
      >
        {typeModal === "edit" ? (
          <Form
            dataForm={dataForm}
            subDataService={subDataService}
            buttonName={"Submit"}
            buttonBg={"bg-blue-600"}
            handleSubmitData={(data, resetField, setLoading) =>
              handleSubmitData({
                data,
                dataId: dataColumn.id,
                postData: service.edit,
                resetField,
                setLoading,
                setShowModal: setShowModal,
                setUpdateData,
                accessToken,
              })
            }
          />
        ) : typeModal === "delete" ? (
          <ConfirmDelete
            setShowModal={setShowModal}
            dataName={dataColumn?.name}
            handleSubmitData={(setLoading) =>
              handleSubmitData({
                postData: service.delete,
                setLoading,
                setShowModal: setShowModal,
                setUpdateData,
                dataId: dataColumn.id,
                accessToken,
              })
            }
          />
        ) : null}
      </LayoutModal>
    </>
  );
};

export default Table;
