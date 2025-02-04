import React from "react";
import { Button } from "../atoms";
import SearchBar from "./SearchBar";
import { Form } from "../organism";
import { handleShowModal, handleSubmitData } from "../../pattern/HandleButton";
import { LayoutModal } from "../layouts";

const HeaderContent = ({
  showAddModal,
  setShowAddModal,
  inputDataForm,
  service,
  setUpdateData,
  accessToken,
  dataId,
}) => {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <SearchBar />
        <Button
          className={"bg-blue-600 text-sm px-3 text-white rounded-md"}
          onClick={() => handleShowModal(true, setShowAddModal)}
        >
          Tambah Data
        </Button>
      </div>

      <LayoutModal
        show={showAddModal}
        title={"Tambah Data Baru"}
        setShowModal={setShowAddModal}
      >
        <Form
          dataForm={inputDataForm}
          buttonName={"Submit"}
          buttonBg={"bg-blue-600"}
          handleSubmitData={(data, resetField, setLoading) =>
            handleSubmitData({
              data,
              dataId,
              postData: service,
              resetField,
              setShowModal: setShowAddModal,
              setLoading,
              setUpdateData,
              accessToken,
            })
          }
        />
      </LayoutModal>
    </div>
  );
};

export default HeaderContent;
