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
    // Validasi data sebelum membuka modal
    if (!data || !data.id || !data.nama_departement) {
      console.error("Invalid department data:", data);
      showAlert("Error", "Data departemen tidak valid", "error", 5000);
      return;
    }
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
    try {
      // Validasi data yang diperlukan
      if (!selectedData || !selectedData.id) {
        console.error("No department selected for editing");
        showAlert("Error", "No department selected", "error", 5000);
        return;
      }

      const updatedData = {
        ...selectedData,
        nama_departement: formData.nama_departement,
      };

      const response = await updateDepartement(
        selectedData.id,
        updatedData,
        token
      );

      if (response) {
        console.log(response);
        showAlert("Success", response.message, "success", 5000);
        await fetchData(); // Refresh data
        closeEditModal(); // Tutup modal setelah sukses
      }
    } catch (error) {
      console.error("Gagal Update Data", error);
      showAlert("Error", "Gagal mengupdate departemen", "error", 5000);
    }
  };

  const confirmDeleteDepartement = async (id) => {
    if (dataToDelete) {
      console.log("delete: ", dataToDelete);
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
