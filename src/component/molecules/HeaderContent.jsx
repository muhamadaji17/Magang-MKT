import { Button } from "../atoms";
import { Form } from "../organism";
import { LayoutModal } from "../layouts";

const HeaderContent = ({
  showModal,
  inputDataForm,
  handleShowModal,
  handleSubmitData,
}) => {
  return (
    <header>
      <div className="flex justify-end gap-3 items-end mb-2">
        <Button
          className={"bg-blue-600 text-sm p-2 mb-[9px] text-white rounded-md"}
          onClick={() => handleShowModal("add")}
        >
          Tambah Data
        </Button>
      </div>

      <LayoutModal
        show={showModal}
        title={"Tambah Data Baru"}
        handleShowModal={handleShowModal}
      >
        <Form
          dataForm={inputDataForm}
          buttonName={"Submit"}
          buttonBg={"bg-blue-600"}
          handleSubmitData={handleSubmitData}
        />
      </LayoutModal>
    </header>
  );
};

export default HeaderContent;
