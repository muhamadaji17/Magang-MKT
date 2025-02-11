import { Button } from "../atoms";
import { Form } from "../organism";
import { handleShowModal, handleSubmitData } from "../../pattern";
import { LayoutModal } from "../layouts";
import { Searchbar } from "../molecules";
import { useAuthToken } from "../../hook";
const HeaderContent = ({
  showModal,
  setShowModal,
  inputDataForm,
  subDataService,
  setUpdateData,
  service,
  inputValue,
  handleSearch,
}) => {
  const accessToken = useAuthToken();

  return (
    <header>
      <div className="flex justify-end gap-3 items-end mb-2">
        <Searchbar handleSearch={handleSearch} inputValue={inputValue} />
        <Button
          className={"bg-blue-600 text-sm p-2 mb-[9px] text-white rounded-md"}
          onClick={() => handleShowModal(setShowModal)}
        >
          Tambah Data
        </Button>
      </div>

      <LayoutModal
        show={showModal}
        title={"Tambah Data Baru"}
        setShowModal={setShowModal}
      >
        <Form
          dataForm={inputDataForm}
          buttonName={"Submit"}
          subDataService={subDataService}
          buttonBg={"bg-blue-600"}
          handleSubmitData={(data, resetField, setLoading) =>
            handleSubmitData({
              data,
              postData: service,
              resetField,
              setShowModal: setShowModal,
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
