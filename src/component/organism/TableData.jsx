import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuthStore from "../../store/useAuthStore";
import {
  Button,
  Modal,
  Input,
  Form,
  FormTitle,
  SearchTable,
  ModalDepartement,
  ModalDelete,
  Table,
} from "../index";

import { TbEdit } from "react-icons/tb";
import { FaTrashCan } from "react-icons/fa6";

import { formatDateTime } from "../../utils/formatters";

import { labelDepartement } from "../../utils/label";

import { useDepartementModal } from "../../hook/useDepartementModal";

const DepartementPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
    handleAddDepartement,
    isModalOpen,
    openModal,
    closeModal,
    confirmDeleteDepartement,
    closeDeleteModal,
    openDeleteModal,
    isDeleteModalOpen,
    isEditModalOpen,
    setEditModalOpen,
    handleEditDepartement,
    setSelectedData,
    fetchData,
    dataDepartement,
  } = useDepartementModal(token);

  // Load data awal ketika komponen pertama kali di-mount
  useEffect(() => {
    fetchData();
  }, []);

  // Mengisi form saat mengedit
  const handleEditClick = (departement) => {
    setSelectedData(departement);
    setValue("nama_departement", departement.nama_departement);
    setEditModalOpen(true);
  };

  // Pencarian berdasarkan nama departemen
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = dataDepartement.filter((item) =>
    item.nama_departement.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center w-full pb-4">
        <SearchTable value={searchQuery} onChange={handleSearch} />
        <Button
          className="bg-primary px-4 py-2 text-xs lg:text-sm text-white hover:bg-blue-700"
          onClick={openModal}
        >
          Add Departement
        </Button>
      </div>

      <Table label={labelDepartement}>
        {filteredData.map((row, rowIndex) => (
          <tr className="bg-white border-b border-gray-200" key={rowIndex}>
            <td className="px-6 py-4">{rowIndex + 1}</td>
            <td className="px-6 py-4">{row.created_admin.username}</td>
            <td className="px-6 py-4">{row.departement_code}</td>
            <td className="px-6 py-4">{row.nama_departement}</td>
            <td className="px-6 py-4">
              {formatDateTime(row.created_admin.createdAt)}
            </td>
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
        ))}
      </Table>

      <ModalDelete
        closeModal={closeDeleteModal}
        isModalOpen={isDeleteModalOpen}
        onSubmit={confirmDeleteDepartement}
      />

      <ModalDepartement
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        register={registerDepartement}
        errors={errorsDepartement}
        handleSubmit={handleSubmitDepartement}
        onSubmit={handleAddDepartement}
        isSubmitting={isSubmittingDepartement}
      />

      {/* Modal Edit Departement */}
      {isEditModalOpen && (
        <Modal
          isOpen={isEditModalOpen}
          closeModal={() => setEditModalOpen(false)}
        >
          <FormTitle title="Edit Departement" />
          <p className="text-sm text-gray-600">Change departmental data here</p>
          <Form
            onSubmit={handleSubmit(handleEditDepartement)}
            className="space-y-4"
          >
            <div>
              <Input
                type="text"
                placeholder="Nama Departemen"
                className="w-full"
                {...register("nama_departement", {
                  required: "Nama departemen tidak boleh kosong",
                })}
              />
              {errors.nama_departement && (
                <p className="text-red-500 text-sm">
                  {errors.nama_departement.message}
                </p>
              )}
            </div>
            <div className="w-full flex justify-center items-center space-x-4">
              <Button
                className="text-gray-700 bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2"
                onClick={() => setEditModalOpen(false)}
              >
                Close
              </Button>
              <Button
                type="submit"
                className="text-white hover:bg-green-800 bg-success text-sm px-4 py-2"
              >
                {isSubmitting ? "Updating ..." : "Update Changes"}
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default DepartementPage;
