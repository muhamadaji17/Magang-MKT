import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "../atom";

const ModalLayout = ({
  title,
  isModalOpen,
  closeButton,
  description,
  className = "",
  submitType,
  children,
  handleCloseModal,
}) => {
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handleCloseModal]);

  return (
    <>
      {isModalOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div
            className="absolute inset-0 h-screen bg-black/60 z-[999]"
            onClick={handleCloseModal}
          ></div>
          <div className="flex justify-center items-center h-full">
            <div
              className={` rounded-sm p-5 max-h-[100vh] z-[999] overflow-y-auto ${
                submitType === "delete"
                  ? "w-[400px] bg-white"
                  : submitType === "image"
                  ? "w-fit"
                  : "w-[1000px] bg-white"
              } ${className} z-10 `}
            >
              {closeButton && (
                <div className="mb-5 flex justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    {description && (
                      <span className="text-gray-600">{description}</span>
                    )}
                  </div>
                  {submitType !== "image" && (
                    <div>
                      <Button onClick={handleCloseModal} className={"text-2xl"}>
                        <IoClose />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLayout;
