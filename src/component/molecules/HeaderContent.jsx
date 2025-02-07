import React from "react";
import { Button } from "../atoms";
import { Form } from "../organism";
import { handleShowModal, handleSubmitData } from "../../pattern/HandleButton";
import { LayoutModal } from "../layouts";
import { Searchbar } from "../molecules";
import { useAccessToken } from "../../hook";
import { departementService } from "../../service";
const HeaderContent = ({
  showAddModal,
  setShowAddModal,
  inputDataForm,
  setUpdateData,
  inputValue,
  handleSearch,
}) => {
  const { accessToken } = useAccessToken();

  return (
    <header>
      <div className="flex justify-end gap-3 items-end mb-2">
        <Searchbar handleSearch={handleSearch} inputValue={inputValue} />
        <Button
          className={"bg-blue-600 text-sm p-2 mb-[9px] text-white rounded-md"}
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
              postData: departementService.add,
              resetField,
              setShowModal: setShowAddModal,
              setLoading,
              setUpdateData,
              accessToken,
            })
          }
        />
      </LayoutModal>
    </header>
  );
};

export default HeaderContent;
