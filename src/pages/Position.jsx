import useAuthStore from "../store/useAuthStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../utils";
import { useForm } from "react-hook-form";
import TableData from "../component/organism/TableData";

import {
  SearchTable,
  Button,
  ModalDelete,
  ModalEdit,
  AddModal,
} from "../component";

import { inputPosition, editPosition } from "../utils/dataInput";

import { apiGet } from "../api/apiCall";
import {
  confirmDeletePosition,
  fetchJabatan,
  handleAddPosition,
  handleEditPosition,
} from "../service/jabatanService";
import { usePositionHook } from "../hook/usePositionHook";
import { labelJabatan } from "../utils/label";

const Position = () => {
  const [dataPosition, setDataPosition] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { token } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      nama_jabatan: "",
    },
  });

  const {
    register: registerPosition,
    handleSubmit: handleSubmitPosition,
    formState: {
      errors: errorsPosition,
      isSubmitting: isSubmittingDepartement,
    },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      nama_jabatan: "",
      jabatan_code: "",
      priority: "",
    },
  });

  const getAllPosition = async (token, refresh) => {
    const response = await fetchJabatan(token, refresh);
    setDataPosition(response);
  };

  const {
    searchQuery,
    handleSearch,
    searchPositionCode,
    handleSearchPositionCode,
    openModal,
    closeEditModal,
    isEditModalOpen,
    closeDeleteModal,
    isDeleteModalOpen,
    selectedData,
    closeModal,
    isModalOpen,
    handleEditClick,
    handleDeleteClick,
  } = usePositionHook();

  useEffect(() => {
    if (searchQuery === "" && searchPositionCode === "") {
      getAllPosition(token, setRefresh);
    } else {
      queryPosition(searchQuery, searchPositionCode, setRefresh);
    }
  }, [searchQuery, searchPositionCode, setRefresh]);

  const queryPosition = async (nama_jabatan, jabatan_code, setRefresh) => {
    let query = "/crud/jabatan/by?";
    if (nama_jabatan) {
      query += `nama_jabatan=${nama_jabatan}&`;
    }
    if (jabatan_code) {
      query += `jabatan_code=${jabatan_code}`;
    }

    const response = await apiGet(query, token);

    const parsing = response.payload.map((data) => ({
      nama_jabatan: data.nama_jabatan,
      jabatan_code: data.jabatan_code,
      username: data.created_admin.username,
      createdAt: data.createdAt,
      id: data.id,
    }));
    setRefresh(true);
    setDataPosition(parsing);
  };

  useEffect(() => {
    if (!token) {
      showAlert("Warning!", "Silahkan login terlebih dahulu", "warning", 5000);
      navigate("/auth/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    getAllPosition(token, setRefresh);
  }, [refresh]);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center w-full pb-4 flex-wrap lg:flex-row gap-2">
          <SearchTable
            value={searchQuery}
            onChange={handleSearch}
            placeHolder="Search Position"
          />
          <SearchTable
            value={searchPositionCode}
            onChange={handleSearchPositionCode}
            placeHolder="Search Position ID"
          />
          <Button
            className="bg-primary px-4 py-2 text-xs lg:text-sm text-white hover:bg-blue-700"
            onClick={openModal}
          >
            Add Departement
          </Button>
        </div>
        <TableData
          label={labelJabatan}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={(row) => handleEditClick(row, setValue)}
          dataTable={dataPosition}
        />
      </div>

      <ModalDelete
        closeModal={closeDeleteModal}
        isModalOpen={isDeleteModalOpen}
        onSubmit={() => {
          confirmDeletePosition(
            selectedData?.id,
            token,
            closeDeleteModal,
            setRefresh
          );
        }}
      />

      {/* Modal Tambah Departement */}
      <AddModal
        setRefresh={setRefresh}
        token={token}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        register={registerPosition}
        errors={errorsPosition}
        handleSubmit={handleSubmitPosition}
        onSubmit={handleAddPosition}
        isSubmitting={isSubmittingDepartement}
        addInput={inputPosition}
        titleForm="Form Position"
        descForm="Enter position details to submit"
      />

      {/* Modal Edit Departement */}
      <ModalEdit
        setRefresh={setRefresh}
        token={token}
        closeModal={closeEditModal}
        editDepartement={editPosition}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={handleEditPosition}
        id={selectedData?.id}
        isSubmitting={isSubmitting}
        isModalOpen={isEditModalOpen}
        register={register}
      />
    </>
  );
};

export default Position;
