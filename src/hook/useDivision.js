import { addUnit, deleteUnit, updateUnit } from "../service/unitService";
import { showAlert } from "../utils";
import { useState } from "react";

export const useDivision = (token, fetchData) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [dataToDelete, setDataToDelete] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedData(null);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeleteModal = (id) => {
    setDataToDelete(id);
    setIsDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDataToDelete(null);
    setIsDeleteModal(false);
  };

  const handleAddUnit = async (dataPost) => {
    try {
      const response = await addUnit(dataPost, token);
      showAlert("Success", response.message, "success", 5000);
      closeModal();
      fetchData();
    } catch (error) {
      console.log(error);
      showAlert("Error", error.config.data, "error", 5000);
    }
  };

  const confirmDeleteUnit = async () => {
    if (dataToDelete) {
      try {
        const response = await deleteUnit(dataToDelete, token);
        showAlert("Success", response.message, "success", 5000);
        await fetchData();
        closeDeleteModal();
      } catch (error) {
        console.error("Gagal menghapus unit", error);
        showAlert("Error", "Gagal menghapus unit", "error", 5000);
      }
    }
  };

  const handleEditUnit = async (formData) => {
    try {
      const updatedData = {
        ...selectedData,
        nama_unit: formData.nama_unit,
      };
      const response = await updateUnit(selectedData.id, updatedData, token);
      showAlert("Success", response.message, "success", 5000);
      await fetchData();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleAddUnit,
    openModal,
    closeModal,
    isModalOpen,
    confirmDeleteUnit,
    openDeleteModal,
    isDeleteModal,
    closeDeleteModal,
    handleDeleteUnit: openDeleteModal,
    handleEditUnit,
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    selectedData,
  };
};
