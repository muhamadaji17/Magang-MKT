import { useState } from "react";

const useEditModal = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => {
    setShowEditModal(true);
    console.log("open edit modal");
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    console.log("close edit modal");
  };

  return {
    showEditModal,
    openEditModal,
    closeEditModal,
  };
};

export default useEditModal;
