import { useEffect, useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import { Button, SearchTable, ModalDepartement, ModalEdit } from "../index";
import { useForm } from "react-hook-form";
import { label } from "../../pattern/PatternTableName";
import { editDepartement } from "../../utils/dataInput";
import TableHeader from "../atom/TableHeader";
import TableBody from "../atom/TableBody";
import { useDepartementModal } from "../../hook/useDepartementModal";
import { fetchDepartements } from "../../service/departementService";
import ModalDelete from "../moleculs/ModalDelete";

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
      <div className="flex justify-between items-center w-full py-4">
        <SearchTable value={searchQuery} onChange={handleSearch} />
        <Button
          onClick={openModal}
          className="text-white text-sm px-4 py-2 bg-primary"
        >
          Add Departement
        </Button>
      </div>
      <table className="table-fixed w-full bg-white">
        <TableHeader labels={label} />
        <TableBody
          handleDeleteClick={handleDeleteDepartement}
          handleEditClick={handleEditClick}
          data={filteredData.slice(0, 10)}
        />
      </table>

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
