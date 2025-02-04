import React from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null; // Jangan render modal jika tidak terbuka

  return (
    <div className="fixed inset-0 flex w-full bg-black/10 justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md w-96">
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
