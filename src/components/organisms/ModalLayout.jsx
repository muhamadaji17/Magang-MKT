import { IoMdClose } from "react-icons/io";
import Form from "./Form";
import {
    handleSubmitData,
    handleCloseBgModal,
    handleCancelModal,
} from "../../pattern";
import { CiWarning } from "react-icons/ci";
import { useGlobalHooks } from "../../hooks";

const ModalLayout = ({
    titleModal,
    dataForm,
    setShowModal,
    addService,
    getDetailsData,
    type,
    setReGetDatas,
}) => {
    const { loadingButton, setLoadingButton, trigger, accessToken } =
        useGlobalHooks();
    return (
        <div
            ref={trigger}
            className="fixed inset-0 w-full h-full drop-shadow-md bg-black/40 flex items-center justify-center z-50"
            onClick={(e) => handleCloseBgModal(e, trigger, setShowModal)}
        >
            {type === "delete" ? (
                <div className="bg-white w-[400px] lg:h-[250px] justify-center gap-9 flex flex-col p-6">
                    <div className="space-y-3">
                        <div className="flex flex-col items-center justify-center">
                            <CiWarning className="text-6xl text-[#FF4D4D]" />
                            <h1 className="font-bold text-2xl">Warning!</h1>
                            <p className="text-sm">
                                Are you sure? this action cannot be undone.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <button
                            className="bg-[#ECECEC] w-[144px] h-[44px] rounded cursor-pointer"
                            onClick={() => handleCancelModal(setShowModal)}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-[#FF4D4D] w-[144px] h-[44px] rounded text-white cursor-pointer"
                            onClick={() =>
                                handleSubmitData(
                                    getDetailsData,
                                    addService,
                                    accessToken,
                                    setShowModal,
                                    setLoadingButton,
                                    setReGetDatas
                                )
                            }
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg p-2 w-[1000px] h-[600px] relative flex flex-col">
                    <div>
                        <h1 className="text-2xl font-semibold text-center p-2">
                            {titleModal}
                        </h1>
                        <div className="absolute top-3 right-2 w-[24px] h-[24px] rounded-full cursor-pointer">
                            <IoMdClose
                                className="w-full h-full rounded-full"
                                onClick={() => handleCancelModal(setShowModal)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center flex-1 min-h-0 overflow-y-auto">
                        <div className="w-4/5 max-h-full">
                            <Form
                                dataForm={dataForm}
                                handleSubmitData={
                                    !getDetailsData
                                        ? (data, reset) =>
                                              handleSubmitData(
                                                  data,
                                                  addService,
                                                  accessToken,
                                                  setShowModal,
                                                  reset,
                                                  setLoadingButton,
                                                  setReGetDatas
                                              )
                                        : (data, reset) =>
                                              handleSubmitData(
                                                  data,
                                                  addService,
                                                  getDetailsData.id,
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
            )}
        </div>
    );
};

export default ModalLayout;
