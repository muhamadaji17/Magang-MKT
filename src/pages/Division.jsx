import { useEffect, useState } from "react";
import { apiGet } from "../api/apiCall";
import useAuthStore from "../store/useAuthStore";
import TableFlowbite from "../component/atom/Table";
import { SearchTable, Button, ModalDelete, ModalEdit } from "../component";
import { formatDateTime } from "../utils/formatters";
import AddModal from "../component/moleculs/AddModal";
import { useForm } from "react-hook-form";
import { useDivision } from "../hook/useDivision";
import { inputEditUnit } from "../utils/dataInput";

import { TbEdit } from "react-icons/tb";
import { FaTrashCan } from "react-icons/fa6";

const Division = () => {
  const { token } = useAuthStore();
  const [divisionData, setDivisionData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await apiGet(`/crud/unit`, token);
      console.log(response);
      setDivisionData(response.payload);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const {
    closeModal,
    handleAddUnit,
    isModalOpen,
    openModal,
    closeDeleteModal,
    confirmDeleteUnit,
    handleDeleteUnit,
    isDeleteModal,
    openDeleteModal,
    closeEditModal,
    handleEditUnit,
    isEditModalOpen,
    openEditModal,
    selectedData,
  } = useDivision(token, fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  const label = [
    { name: "No", key: "no" },
    { name: "Departement Name", key: "created" },
    { name: "Unit Name", key: "nama_unit" },
    { name: "Unit Code", key: "unit_code" },
    { name: "Created At", key: "createdAt" },
    { name: "Action", key: "action" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEditClick = (data) => {
    openEditModal();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      id_departement: "",
      unit_code: "",
      nama_unit: "",
    },
  });

  return (
    <>
      <div className="flex justify-between items-center w-full pb-4">
        <SearchTable value={searchQuery} onChange={handleSearch} />
        <Button
          onClick={openModal}
          className="text-white text-sm px-4 py-2 bg-primary"
        >
          Add Unit
        </Button>
      </div>
      <TableFlowbite label={label}>
        {divisionData.map((row, rowIndex) => (
          <tr className="bg-white border-b border-gray-200" key={rowIndex}>
            <td className="px-6 py-4">{rowIndex + 1}</td>
            <td className="px-6 py-4">
              {row.id_departement_departement.nama_departement}
            </td>
            <td className="px-6 py-4">{row.nama_unit}</td>
            <td className="px-6 py-4">{row.unit_code}</td>
            <td className="px-6 py-4">
              <span title={row.createdAt}>{formatDateTime(row.createdAt)}</span>
            </td>
            <td className="px-6 py-4 flex items-center space-x-3">
              <button
                onClick={() => handleEditClick(row)}
                className="text-green-500 hover:text-green-700"
              >
                <TbEdit size={20} />
              </button>
              <button
                onClick={() => handleDeleteUnit(row.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrashCan size={20} />
              </button>
            </td>
          </tr>
        ))}
        <AddModal
          onSubmit={handleAddUnit}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          isModalOpen={isModalOpen}
        />
        <ModalDelete
          isModalOpen={isDeleteModal}
          closeModal={closeDeleteModal}
          onSubmit={confirmDeleteUnit}
        />
      </TableFlowbite>
    </>
  );
};

export default Division;
