import { TableHead, TableBody, ConfirmDelete } from "../molecules";
import { LayoutModal } from "../layouts";
import { handleSubmitData } from "../../pattern";
import { Form } from "../organism/";
import { useAuthToken } from "../../hook";
import { Input } from "../atoms";

const Table = ({
  dataTable,
  searchQuery,
  tableConfig,
  dataColumn,
  typeModal,
  dataForm,
  service,
  showModal,
  handleShowModal,
  handleSearch,
  setUpdateData,
}) => {
  const accessToken = useAuthToken();

  return (
    <>
      <div className="relative overflow-x-auto border rounded-tr-md rounded-tl-md border-gray-300 shadow-md sm:rounded-lg">
        <div className="p-3 flex justify-evenly">
          {tableConfig.map((data) => (
            <Input
              key={data.key}
              type="text"
              placeholder={data.title}
              onChange={(e) => handleSearch(e.target.value, data.key)}
              className="border border-gray-400 rounded-md py-1 px-3 outline-none w-28 md:w-fit text-xs"
            />
          ))}
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <TableHead dataHead={tableConfig} />
          <TableBody
            dataTable={dataTable}
            tableConfig={tableConfig}
            handleShowModal={handleShowModal}
          />
        </table>

        {Object.keys(searchQuery).length > 0 && dataTable?.length === 0 ? (
          <div className="text-center p-40">
            <span>Data tidak ditemukan.</span>
          </div>
        ) : Object.keys(searchQuery).length === 0 && dataTable?.length === 0 ? (
          <div className="text-center p-40">
            <span>Tidak ada data.</span>
          </div>
        ) : null}
      </div>

      <LayoutModal
        title={typeModal === "edit" && "Ubah Data"}
        show={showModal}
        handleShowModal={handleShowModal}
      >
        {typeModal === "edit" ? (
          <Form
            dataForm={dataForm}
            buttonName={"Submit"}
            buttonBg={"bg-blue-600"}
            handleSubmitData={(data, resetField, setLoading) =>
              handleSubmitData({
                data,
                dataId: dataColumn.id,
                postData: service.edit,
                resetField,
                setLoading,
                handleShowModal,
                setUpdateData,
                accessToken,
              })
            }
          />
        ) : typeModal === "delete" ? (
          <ConfirmDelete
            handleShowModal={handleShowModal}
            dataName={dataColumn?.name}
            handleSubmitData={() =>
              handleSubmitData({
                postData: service.delete,
                handleShowModal,
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
