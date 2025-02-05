import React from "react";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null; // Jangan render modal jika tidak terbuka

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-4 rounded-md w-96">
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
