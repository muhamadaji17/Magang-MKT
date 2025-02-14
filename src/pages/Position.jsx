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
  const [dataJabatan, setDataPosition] = useState([]);
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

  const getAllPosition = async () => {
    const response = await fetchJabatan(token, setRefresh);
    console.log("getAll:", response);
    setDataPosition(response);
  };

  const {
    searchQuery,
    handleSearch,
    searchDepartementCode,
    handleSearchDepartementCode,
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
    queryDepartement(searchQuery, searchDepartementCode);
  }, [searchQuery, searchDepartementCode]);

  const queryDepartement = async (nama_jabatan, jabatan_code) => {
    let query = "/crud/jabatan/by?";
    if (nama_jabatan) {
      query += `nama_jabatan=${nama_jabatan}&`;
    }
    if (jabatan_code) {
      query += `jabatan_code=${jabatan_code}`;
    }

    const response = await apiGet(query, token);

    if (response?.payload && Array.isArray(response.payload)) {
      setDataPosition(response.payload);
      console.log(response?.payload);
    } else {
      setDataPosition([]);
    }
  };

  useEffect(() => {
    if (!token) {
      showAlert("Warning!", "Silahkan login terlebih dahulu", "warning", 5000);
      navigate("/auth/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    getAllPosition();
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
            value={searchDepartementCode}
            onChange={handleSearchDepartementCode}
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
          queryDepartement={queryDepartement}
          dataDepartement={dataJabatan}
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
