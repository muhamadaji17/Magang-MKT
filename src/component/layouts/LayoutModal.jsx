import { Button } from "../atoms";
import { IoMdClose } from "react-icons/io";

const LayoutModal = ({ show, handleShowModal, children, title }) => {
  return (
    <>
      {show && (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-20">
          <div
            className="w-full h-full bg-black opacity-40"
            onClick={handleShowModal}
          ></div>

          <div className="p-4 w-1/3 bg-white rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%]">
            {title && (
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl">{title}</h1>
                <Button onClick={handleShowModal}>
                  <IoMdClose />
                </Button>
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default LayoutModal;
