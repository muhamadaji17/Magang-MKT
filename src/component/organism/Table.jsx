import React, { useState } from "react";
import { TableHead, TableBody, ConfirmDelete } from "../molecules";
import { LayoutModal } from "../layouts";
import { useAccessToken } from "../../hook";
import { handleSubmitData } from "../../pattern";
import { Form } from "../organism/";

const Table = ({
  dataTable,
  tableConfig,
  classNameHead,
  showEditModal,
  dataForm,
  setUpdateData,
  dataId,
  setDataId,
  editService,
  deleteService,
  setShowEditModal,
}) => {
  const [valueTable, setValueTable] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const { accessToken } = useAccessToken();

  return (
    <>
      <div className="">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <TableHead className={classNameHead} titles={tableConfig.titles} />
            <TableBody
              data={dataTable}
              setDataId={setDataId}
              setShowModal={setShowEditModal}
              setValueTable={setValueTable}
              setShowConfirmDelete={setShowConfirmDelete}
            />
          </table>
        </div>
      </div>

      <LayoutModal
        title={"Ubah Data"}
        show={showEditModal}
        setShowModal={setShowEditModal}
      >
        <Form
          dataForm={dataForm}
          buttonName={"Submit"}
          buttonBg={"bg-blue-600"}
          handleSubmitData={(data, resetField, setLoading) =>
            handleSubmitData({
              data,
              dataId,
              postData: editService,
              resetField,
              setLoading,
              setShowModal: setShowEditModal,
              setUpdateData,
              accessToken,
            })
          }
        />
      </LayoutModal>

      <LayoutModal show={showConfirmDelete} setShowModal={setShowConfirmDelete}>
        <ConfirmDelete
          setShowModal={setShowConfirmDelete}
          dataId={dataId}
          handleSubmitData={(setLoading) =>
            handleSubmitData({
              postData: deleteService,
              setLoading,
              setShowModal: setShowConfirmDelete,
              setUpdateData,
              dataId,
              accessToken,
            })
          }
        />
      </LayoutModal>
    </>
  );
};

export default Table;
