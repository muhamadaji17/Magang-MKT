import { useEffect, useState } from "react";
import { apiGet, apiPost, apiPut } from "../../api/apiCall";
import useAuthStore from "../../store/useAuthStore";
import { Button, SearchTable, ModalDepartement, ModalEdit } from "../index";
import useModal from "../../hook/useModal";
import { useForm } from "react-hook-form";
import { showAlert } from "../../utils";
import { label } from "../../pattern/PatternTableName";
import { editDepartement } from "../../utils/dataInput";
import useEditModal from "../../hook/useEditModal";
import TableHeader from "../atom/TableHeader";
import TableBody from "../atom/TableBody";

const TableData = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null); // Untuk menyimpan data yang dipilih
  const { token } = useAuthStore();
  const { isModalOpen, openModal, closeModal } = useModal();
  const { closeEditModal, openEditModal, showEditModal } = useEditModal();

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

  const fetchData = async () => {
    const result = await apiGet("/crud/departement", token);
    setData(result.payload);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const limitedData = data.slice(0, 10);

  const formPost = async (dataPost) => {
    const response = await apiPost("/crud/departement", dataPost, token);
    showAlert("Success", response.message, "success", 5000);
    closeModal();
    fetchData();
  };

  // Menangani perubahan data
  const onSubmit = async (formData) => {
    if (!selectedData) return;

    const updatedData = {
      ...selectedData,
      nama_departement: formData.nama_departement,
    };

    try {
      const response = await apiPut(
        `/crud/departement/${selectedData.id}`,
        updatedData,
        token
      );
      showAlert("Success", response.message, "success", 5000);
      fetchData();
      closeEditModal();
    } catch (error) {
      console.error("Gagal memperbarui data:", error);
    }
  };

  // Mengisi form dengan data yang dipilih
  const handleEditClick = (data) => {
    setSelectedData(data);
    setValue("nama_departement", data.nama_departement); // Isi form dengan data yang dipilih
    openEditModal();
  };

  return (
    <>
      <div className="flex justify-between items-center w-full py-4">
        <SearchTable />
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
          handleEditClick={handleEditClick}
          limitedData={limitedData}
        />
      </table>

      <ModalDepartement
        onSubmit={formPost}
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
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        editDepartement={editDepartement}
        showEditModal={showEditModal}
      />
    </>
  );
};

export default TableData;
