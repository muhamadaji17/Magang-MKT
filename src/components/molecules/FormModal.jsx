import ModalLayoutHeader from "./ModalLayoutHeader";
import { Form } from "../organisms";
import { handleSubmitData } from "../../pattern";
import { useGlobalHooks } from "../../hooks";

const FormModal = ({
    titleModal,
    setShowModal,
    dataForm,
    service,
    setReGetDatas,
    loadingSubData,
}) => {
    const { loadingButton, setLoadingButton, accessToken } = useGlobalHooks();

    if (loadingSubData)
        return (
            <div className="w-full h-full flex items-center justify-center">
                Loading...
            </div>
        );

    return (
        <div className="bg-white rounded-lg p-2 w-[1000px] h-[600px] relative flex flex-col">
            <ModalLayoutHeader title={titleModal} setShowModal={setShowModal} />
            <div className="flex flex-col justify-center items-center flex-1 min-h-0 overflow-y-auto">
                <div className="w-4/5 max-h-full">
                    <Form
                        dataForm={dataForm}
                        handleSubmitData={(data, reset) =>
                            handleSubmitData(
                                data,
                                service,
                                accessToken,
                                setShowModal,
                                reset,
                                setLoadingButton,
                                setReGetDatas
                            )
                        }
                        loading={loadingButton}
                        buttonName="Send"
                        buttonStyle="w-24 text-white bg-blue-600 hover:bg-blue-800"
                    />
                </div>
            </div>
        </div>
    );
};

export default FormModal;
