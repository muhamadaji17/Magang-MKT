import { useState } from "react";
import showAlert from "../utils/ShowAlert";
import {
  addDepartement,
  deleteDepartement,
  fetchDepartements,
} from "../service/departementService";

export const useDepartementModal = (token, fetchData) => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [dataToDelete, setDataToDelete] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeleteModal = (id) => {
    setDataToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDataToDelete(null); // Reset data to delete when closing
  };

  const handleAddDepartement = async (dataPost) => {
    try {
      const response = await addDepartement(dataPost, token);
      showAlert("Success", response.message, "success", 5000);
      closeModal();
      fetchData();
    } catch (error) {
      console.error("Gagal menambah departemen:", error);
      showAlert("Error", "Gagal menambah departemen", "error", 5000);
    }
  };

  const confirmDeleteDepartement = async () => {
    if (dataToDelete) {
      try {
        const response = await deleteDepartement(dataToDelete, token);
        showAlert("Success", response.message, "success", 5000);
        await fetchData();
        closeDeleteModal();
      } catch (error) {
        console.error("Gagal menghapus departemen:", error);
        showAlert("Error", "Gagal menghapus departemen", "error", 5000);
      } finally {
        closeDeleteModal();
      }
    }
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    confirmDeleteDepartement,
    handleAddDepartement,
    handleDeleteDepartement: openDeleteModal,
  };
};
