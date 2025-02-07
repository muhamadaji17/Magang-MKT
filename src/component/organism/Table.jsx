import React from "react";
import { TableHead, TableBody, ConfirmDelete } from "../molecules";
import { LayoutModal } from "../layouts";
import { handleSubmitData } from "../../pattern";
import { Form } from "../organism/";
import { useAccessToken } from "../../hook";
import { departementService } from "../../service";

const Table = ({
  dataTable,
  tableConfig,
  classNameHead,
  dataForm,
  setUpdateData,
  handleShowModal,
  showModalWithId,
  setShowModalWithId,
  dataColumn,
  typeModal,
}) => {
  const { accessToken } = useAccessToken();

  return (
    <>
      <div className="">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <TableHead className={classNameHead} dataHead={tableConfig} />
            <TableBody
              dataTable={dataTable}
              tableConfig={tableConfig}
              handleShowModal={handleShowModal}
            />
          </table>
        </div>
      </div>

      <LayoutModal
        title={typeModal === "edit" && "Ubah Data"}
        show={showModalWithId}
        setShowModal={setShowModalWithId}
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
                postData: departementService.edit,
                resetField,
                setLoading,
                setShowModal: setShowModalWithId,
                setUpdateData,
                accessToken,
              })
            }
          />
        ) : (
          typeModal === "delete" && (
            <ConfirmDelete
              setShowModal={setShowModalWithId}
              dataName={dataColumn?.name}
              handleSubmitData={(setLoading) =>
                handleSubmitData({
                  postData: departementService.delete,
                  setLoading,
                  setShowModal: setShowModalWithId,
                  setUpdateData,
                  dataId: dataColumn.id,
                  accessToken,
                })
              }
            />
          )
        )}
      </LayoutModal>
    </>
  );
};

export default Table;
