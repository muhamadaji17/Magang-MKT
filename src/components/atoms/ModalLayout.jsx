const ModalLayout = ({ isModalOpen, className, onClick, children }) => {
  return (
    <>
      {isModalOpen && (
        <div
          className={`fixed w-full inset-0 justify-center items-center  flex z-10 ${className} bg-black/70`}
        >
          <div
            onClick={onClick}
            className="fixed w-full h-full opacity-50 z-0"
          ></div>
          {children}
        </div>
      )}
    </>
  );
};

export default ModalLayout;
