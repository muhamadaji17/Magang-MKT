import { useState } from "react";
import showAlert from "../utils/ShowAlert";
import {
  deleteDepartement,
  fetchDepartements,
} from "../service/departementService";

export const useDepartementModal = (token) => {
  const [dataDepartement, setDataDepartement] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [dataToDelete, setDataToDelete] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const closeEditModal = () => setEditModalOpen(false);
  const openEditModal = () => setEditModalOpen(true);

  const openDeleteModal = (id) => {
    setDataToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDataToDelete(null); // Reset data to delete when closing
  };

  const fetchData = async () => {
    try {
      const departements = await fetchDepartements(token);
      setDataDepartement(departements);
    } catch (error) {
      console.error("Error fetching data", error);
      showAlert("Error", "Gagal mengambil data", "error", 5000);
    }
  };

  const confirmDeleteDepartement = async () => {
    if (dataToDelete) {
      const response = await deleteDepartement(dataToDelete, token);
      showAlert("Success", response.message, "success", 5000);
      await fetchData();
      closeDeleteModal();
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
    openDeleteModal,
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    setEditModalOpen,
    selectedData,
    setSelectedData,
    fetchData,
    dataDepartement,
    setDataDepartement,
  };
};
