import { CiWarning } from "react-icons/ci";
import { handleSubmitData } from "../../pattern";
import { useGlobalHooks } from "../../hooks";

const DeleteModal = ({
    setShowModal,
    deleteService,
    id,
    handleCancelModal,
    setReGetDatas,
}) => {
    const { loadingButton, setLoadingButton, accessToken } = useGlobalHooks();

    return (
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
                    onClick={handleCancelModal}
                >
                    Cancel
                </button>
                <button
                    className="bg-[#FF4D4D] w-[144px] h-[44px] rounded text-white cursor-pointer"
                    disabled={loadingButton}
                    onClick={() =>
                        handleSubmitData(
                            id,
                            deleteService,
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
    );
};

export default DeleteModal;
