import { handleCancelModal } from "../../pattern";
import { IoMdClose } from "react-icons/io";

const ModalLayoutHeader = ({ setShowModal, title }) => {
    return (
        <>
            <h1 className="text-xl lg:text-2xl font-semibold text-center">
                {title}
            </h1>
            <div className="absolute top-2 right-2 w-[24px] h-[24px] rounded-full cursor-pointer">
                <IoMdClose
                    className="w-full h-full rounded-full"
                    onClick={() => handleCancelModal(setShowModal)}
                />
            </div>
        </>
    );
};

export default ModalLayoutHeader;
