import { useState } from "react";
import showAlert from "../utils/ShowAlert";
import {
  addDepartement,
  deleteDepartement,
  updateDepartement,
} from "../service/departementService";

export const useDepartementModal = (token, fetchData) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(null);
  const [dataToDelete, setDataToDelete] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openEditModal = (data) => {
    setSelectedData(data);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => setIsEditModalOpen(false);

  const openDeleteModal = (id) => {
    setDataToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleAddDepartement = async (dataPost) => {
    const response = await addDepartement(dataPost, token);
    showAlert("Success", response.message, "success", 5000);
    closeModal();
    fetchData();
  };

  const handleEditDepartement = async (formData) => {
    if (!selectedData) return;
    const updatedData = {
      ...selectedData,
      nama_departement: formData.nama_departement,
    };

    try {
      const response = await updateDepartement(
        selectedData.id,
        updatedData,
        token
      );
      showAlert("Success", response.message, "success", 5000);
      fetchData();
      closeEditModal();
    } catch (error) {
      console.error("Gagal Update Data", error);
    }
  };

  const confirmDeleteDepartement = async (id) => {
    if (dataToDelete) {
      try {
        const response = await deleteDepartement(dataToDelete, token);
        showAlert("Success", response.message, "success", 5000);
        fetchData();
      } catch (error) {
        console.log(error);
      } finally {
        closeDeleteModal();
      }
    }
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    confirmDeleteDepartement,
    handleAddDepartement,
    handleEditDepartement,
    handleDeleteDepartement: openDeleteModal,
    selectedData,
    setSelectedData,
  };
};
