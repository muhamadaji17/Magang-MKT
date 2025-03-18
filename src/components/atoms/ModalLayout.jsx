const ModalLayout = ({ isModalOpen, className, onClick, children }) => {
  return (
    <>
      {isModalOpen && (
        <div
          className={`fixed w-full inset-0 justify-center items-center  flex z-10 ${className} bg-black/70`}
          onClick={onClick}
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      )}
    </>
  );
};

export default ModalLayout;
