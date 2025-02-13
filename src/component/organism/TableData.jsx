import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuthStore from "../../store/useAuthStore";
import {
  Button,
  SearchTable,
  AddModal,
  ModalDelete,
  Table,
  ModalEdit,
} from "../index";

import { labelDepartement } from "../../utils/label";
import { formatDateTime } from "../../utils/formatters";

import { FaTrashCan } from "react-icons/fa6";
import { TbEdit } from "react-icons/tb";

import { useDepartementModal } from "../../hook/useDepartementModal";
import { editDepartement, inputDepartement } from "../../utils/dataInput";
import { apiGet } from "../../api/apiCall";
import {
  handleAddDepartement,
  handleEditDepartement,
} from "../../service/departementService";

const TableData = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDepartementCode, setSearchDepartementCode] = useState("");
  const { token } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      nama_departement: "",
    },
  });

  const {
    register: registerDepartement,
    handleSubmit: handleSubmitDepartement,
    formState: {
      errors: errorsDepartement,
      isSubmitting: isSubmittingDepartement,
    },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      nama_departement: "",
    },
  });

  const {
    selectedData,
    isModalOpen,
    openModal,
    closeModal,
    confirmDeleteDepartement,
    closeDeleteModal,
    openDeleteModal,
    isDeleteModalOpen,
    closeEditModal,
    isEditModalOpen,
    setEditModalOpen,
    setSelectedData,
    fetchData,
    setDataDepartement,
    dataDepartement,
  } = useDepartementModal(token);

  // Load data awal ketika komponen pertama kali di-mount
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchDepartement(searchQuery, searchDepartementCode);
  }, [searchQuery, searchDepartementCode]);

  // Mengisi form saat mengedit
  const handleEditClick = (departement) => {
    setSelectedData(departement);
    setValue("nama_departement", departement.nama_departement);
    setEditModalOpen(true);
  };

  const fetchDepartement = async (nama_departement, departement_code) => {
    let query = "/crud/departement/by?";
    if (nama_departement) {
      query += `nama_departement=${nama_departement}&`;
    }
    if (departement_code) {
      query += `departement_code=${departement_code}`;
    }

    const response = await apiGet(query, token);

    if (response?.payload && Array.isArray(response.payload)) {
      setDataDepartement(response.payload);
    } else {
      setDataDepartement([]); // Set sebagai array kosong jika respons tidak sesuai
    }
  };

  // Pencarian berdasarkan nama departemen
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchDepartementCode = (e) => {
    setSearchDepartementCode(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center w-full pb-4 flex-wrap lg:flex-row gap-2">
        <SearchTable
          value={searchQuery}
          onChange={handleSearch}
          placeHolder="Search Departement"
        />
        <SearchTable
          value={searchDepartementCode}
          onChange={handleSearchDepartementCode}
          placeHolder="Search Departement ID"
        />
        <Button
          className="bg-primary px-4 py-2 text-xs lg:text-sm text-white hover:bg-blue-700"
          onClick={openModal}
        >
          Add Departement
        </Button>
      </div>

      <Table label={labelDepartement}>
        {dataDepartement.length > 0 ? (
          dataDepartement.map((row, rowIndex) => (
            <tr className="bg-white border-b border-gray-200" key={rowIndex}>
              <td className="px-6 py-4">{rowIndex + 1}</td>
              <td className="px-6 py-4">{row.created_admin.username}</td>
              <td className="px-6 py-4">{row.departement_code}</td>
              <td className="px-6 py-4">{row.nama_departement}</td>
              <td className="px-6 py-4">{formatDateTime(row.createdAt)}</td>
              <td className="px-6 py-4 space-x-4 flex items-center">
                <button
                  className="text-green-500 hover:text-green-700"
                  onClick={() => handleEditClick(row)}
                >
                  <TbEdit size={20} />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => openDeleteModal(row.id)}
                >
                  <FaTrashCan size={20} />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6} className="text-center py-4">
              No data available
            </td>
          </tr>
        )}
      </Table>

      {/* Modal Delete Departement */}
      <ModalDelete
        closeModal={closeDeleteModal}
        isModalOpen={isDeleteModalOpen}
        onSubmit={confirmDeleteDepartement}
      />

      {/* Modal Tambah Departement */}
      <AddModal
        token={token}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        register={registerDepartement}
        errors={errorsDepartement}
        handleSubmit={handleSubmitDepartement}
        onSubmit={handleAddDepartement}
        isSubmitting={isSubmittingDepartement}
        addInput={inputDepartement}
        titleForm="Form Departement"
        descForm="Enter departement details to submit"
      />

      {/* Modal Edit Departement */}
      <ModalEdit
        token={token}
        closeModal={closeEditModal}
        editDepartement={editDepartement}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={handleEditDepartement}
        id={selectedData?.id}
        isSubmitting={isSubmitting}
        isModalOpen={isEditModalOpen}
        register={register}
      />
    </div>
  );
};

export default TableData;
