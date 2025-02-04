import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("modal open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("modal close");
  };

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
