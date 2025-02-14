import { useState } from "react";

export const usePositionHook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const [searchQuery, setSearchQuery] = useState(""); // State untuk pencarian
  const [searchDepartementCode, setSearchDepartementCode] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const closeEditModal = () => setEditModalOpen(false);
  const openEditModal = () => setEditModalOpen(true);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchDepartementCode = (e) => {
    setSearchDepartementCode(e.target.value);
  };

  const handleEditClick = (position, setValue) => {
    setSelectedData(position);
    setValue("nama_jabatan", position.nama_jabatan);
    openEditModal();
  };

  const handleDeleteClick = (departement) => {
    setSelectedData(departement);
    openDeleteModal();
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    isDeleteModalOpen,
    closeDeleteModal,
    openDeleteModal,
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    setEditModalOpen,
    selectedData,
    setSelectedData,
    searchQuery,
    setSearchQuery,
    searchDepartementCode,
    setSearchDepartementCode,
    handleSearch,
    handleSearchDepartementCode,
    handleDeleteClick,
    handleEditClick,
  };
};
