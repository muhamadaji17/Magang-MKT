import { handleCloseBgModal } from "../../pattern";
import { useGlobalHooks } from "../../hooks";

const ModalLayout = ({ setShowModal, children }) => {
    const { trigger } = useGlobalHooks();
    return (
        <div
            ref={trigger}
            className="fixed inset-0 w-full h-full drop-shadow-md bg-black/40 flex items-center justify-center z-50"
            onClick={(e) => handleCloseBgModal(e, trigger, setShowModal)}
        >
            {children}
        </div>
    );
};

export default ModalLayout;
