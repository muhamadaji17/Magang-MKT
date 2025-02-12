import { useState } from "react";
import showAlert from "../utils/ShowAlert";
import {
  addDepartement,
  deleteDepartement,
  fetchDepartements,
  updateDepartement,
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
      console.log(departements);
    } catch (error) {
      console.error("Error fetching data", error);
      showAlert("Error", "Gagal mengambil data", "error", 5000);
    }
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

  const handleEditDepartement = async (formData) => {
    try {
      if (!formData.nama_departement) {
        showAlert("Error", "Nama departemen tidak boleh kosong", "error", 5000);
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
        showAlert("Success", response.message, "success", 5000);
        await fetchData();
        setEditModalOpen(false);
      }
    } catch (error) {
      console.error("Gagal update data departemen", error);
      showAlert("Error", "Gagal mengupdate departemen", "error", 5000);
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
    handleAddDepartement,
    openDeleteModal,
    handleEditDepartement,
    isEditModalOpen,
    setEditModalOpen,
    selectedData,
    setSelectedData,
    fetchData,
    dataDepartement,
  };
};
