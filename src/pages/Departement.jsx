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

import { useDepartementHook } from "../hook/useDepartementModal";
import { inputDepartement, editDepartement } from "../utils/dataInput";
import {
  fetchDepartements,
  handleAddDepartement,
  handleEditDepartement,
  confirmDeleteDepartement,
} from "../service/departementService";

import { apiGet } from "../api/apiCall";
import { labelDepartement } from "../utils/label";

const Departement = () => {
  const [dataDepartement, setDataDepartement] = useState([]);
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

  const getAllDepartements = async (refresh) => {
    const response = await fetchDepartements(token, refresh);
    setDataDepartement(response);
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
  } = useDepartementHook();

  useEffect(() => {
    queryDepartement(searchQuery, searchDepartementCode);
  }, [searchQuery, searchDepartementCode]);

  const queryDepartement = async (nama_departement, departement_code) => {
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
      setDataDepartement([]);
    }
  };

  useEffect(() => {
    if (!token) {
      showAlert("Warning!", "Silahkan login terlebih dahulu", "warning", 5000);
      navigate("/auth/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    getAllDepartements(setRefresh);
  }, [refresh]);

  return (
    <>
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
        <TableData
          label={labelDepartement}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={(row) => handleEditClick(row, setValue)}
          dataTable={dataDepartement}
        />
      </div>

      <ModalDelete
        closeModal={closeDeleteModal}
        isModalOpen={isDeleteModalOpen}
        onSubmit={() => {
          confirmDeleteDepartement(
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
        setRefresh={setRefresh}
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
    </>
  );
};

export default Departement;
