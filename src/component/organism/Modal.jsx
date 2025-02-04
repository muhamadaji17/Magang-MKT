import { handleSubmitData } from "../../pattern";
import { Form } from "../organism/";
import { useAccessToken } from "../../hook";
import { IoMdClose } from "react-icons/io";
import { Button } from "../atoms";
import { handleShowModal } from "../../pattern/HandleButton";

const Modal = ({
  dataForm,
  setShowModal,
  setUpdateData,
  dataId,
  title,
  setDataTable,
  service,
}) => {
  const { accessToken } = useAccessToken();

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-20">
      <div
        className="w-full h-full bg-black opacity-40"
        onClick={() => handleShowModal(false, setShowModal)}
      ></div>
      <div className="p-4 w-1/3 bg-white rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl">{title}</h1>
          <Button onClick={() => handleShowModal(false, setShowModal)}>
            <IoMdClose />
          </Button>
        </div>

        <Form
          dataForm={dataForm}
          setDataTable={setDataTable}
          buttonName={"Submit"}
          buttonBg={"bg-blue-600"}
          handleSubmitData={(data, resetField, setLoading) =>
            handleSubmitData({
              data,
              dataId,
              postData: service,
              resetField,
              setShowModal,
              setLoading,
              setUpdateData,
              accessToken,
            })
          }
        />
      </div>
    </div>
  );
};

export default Modal;
