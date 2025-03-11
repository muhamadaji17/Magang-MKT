const ModalLayout = ({ isModalOpen, className, onClick, children }) => {
  return (
    <>
      {isModalOpen && (
        <div
          className={`fixed w-full inset-0 justify-center items-center bg-black/70 flex z-10 ${className}`}
          onClick={onClick}
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      )}
    </>
  );
};

export default ModalLayout;
