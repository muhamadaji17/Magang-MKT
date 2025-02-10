import { useEffect, useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import { Button, SearchTable, ModalDepartement, ModalEdit } from "../index";
import { useForm } from "react-hook-form";
import { labelDepartement } from "../../pattern/PatternTableName";
import { editDepartement } from "../../utils/dataInput";
import { useDepartementModal } from "../../hook/useDepartementModal";
import { fetchDepartements } from "../../service/departementService";
import ModalDelete from "../moleculs/ModalDelete";
import TableFlowbite from "../atom/TableFlowbite";
import { formatDateTime } from "../../utils/formatters";

const TableData = () => {
  const [data, setData] = useState([]);
  const { token } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    const departements = await fetchDepartements(token);
    setData(departements);
  };

  const {
    isModalOpen,
    openModal,
    closeModal,
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    handleAddDepartement,
    handleDeleteDepartement,
    handleEditDepartement,
    selectedData,
    setSelectedData,
    closeDeleteModal,
    confirmDeleteDepartement,
    isDeleteModalOpen,
  } = useDepartementModal(token, fetchData);

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

  // Mengisi form dengan data yang dipilih
  const handleEditClick = (data) => {
    setSelectedData(data);
    setValue("nama_departement", data.nama_departement); // Isi form dengan data yang dipilih
    openEditModal();
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.nama_departement.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center w-full pb-4">
        <SearchTable value={searchQuery} onChange={handleSearch} />
        <Button
          onClick={openModal}
          className="text-white text-sm px-4 py-2 bg-primary"
        >
          Add Departement
        </Button>
      </div>

      <TableFlowbite label={labelDepartement}>
        {filteredData.map((row, rowIndex) => (
          <tr className="bg-white border-b border-gray-200" key={rowIndex}>
            <td className="px-6 py-4">{rowIndex + 1}</td>
            <td className="px-6 py-4">{row.created_admin.username}</td>
            <td className="px-6 py-4">{row.departement_code}</td>
            <td className="px-6 py-4">{row.nama_departement}</td>
            <td className="px-6 py-4">
              {formatDateTime(row.created_admin.createdAt)}
            </td>
            <td className="px-6 py-4 space-x-4">
              <button
                className="text-green-500 hover:text-green-700"
                onClick={() => handleEditClick(row)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteDepartement(row.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </TableFlowbite>

      <ModalDepartement
        onSubmit={handleAddDepartement}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        isModalOpen={isModalOpen}
      />
      <ModalEdit
        closeEditModal={closeEditModal}
        selectedData={selectedData}
        isSubmitting={isSubmitting}
        errors={errors}
        onSubmit={handleEditDepartement}
        handleSubmit={handleSubmit}
        register={register}
        editDepartement={editDepartement}
        showEditModal={isEditModalOpen}
      />
      <ModalDelete
        isModalOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
        onSubmit={confirmDeleteDepartement}
      />
    </>
  );
};

export default TableData;
