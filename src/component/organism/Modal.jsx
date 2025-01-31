import axios from "axios";
import { handleSubmitData } from "../../pattern";
import { Form } from "../organism/";
import { useAccessToken } from "../../hook";
import { TriggerAlert } from "../../utils/TriggerAlert";
import { IoMdClose } from "react-icons/io";
import { Button } from "../atoms";

const Modal = ({ dataForm, setShowModal }) => {
  const { accessToken } = useAccessToken();

  const addDataService = async ({ data, setLoading, resetField }) => {
    const url_api = `${import.meta.env.VITE_URL_CRUD}/departement`;
    try {
      const response = await axios.post(url_api, data, {
        headers: {
          "Content-Type": "application/json",
          "x-token": `mktech ${accessToken}`,
        },
      });
      TriggerAlert({
        title: "Berhasil!",
        text: "Berhasil menambahkan data",
        icon: "success",
      });
      console.log(response);
      resetField();
    } catch (error) {
      console.error(error);

      TriggerAlert({
        title: "Gagal!",
        text: error.response.data.message,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-20">
      <div className="w-full h-full bg-black opacity-40"></div>
      <div className="p-4 w-1/3 bg-white rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between">
          <h1>Nama Form</h1>
          <Button onClick={() => setShowModal(false)}>
            <IoMdClose />
          </Button>
        </div>
        <Form
          dataForm={dataForm}
          buttonName={"Buat Departemen"}
          buttonBg={"bg-blue-600"}
          handleSubmitData={(data, resetField, setLoading) =>
            handleSubmitData({
              data,
              resetField,
              setLoading,
              postData: addDataService,
            })
          }
        />
      </div>
    </div>
  );
};

export default Modal;
