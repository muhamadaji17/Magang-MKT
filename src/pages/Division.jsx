import { useEffect, useState } from "react";
import { apiGet } from "../api/apiCall";
import useAuthStore from "../store/useAuthStore";
import {
  SearchTable,
  Button,
  ModalDelete,
  AddModal,
  Table,
  ModalEdit,
} from "../component";
import { formatDateTime } from "../utils/formatters";
import { useForm } from "react-hook-form";
import { useDivision } from "../hook/useDivision";
import { inputEditUnit, inputUnit } from "../utils/dataInput";

import { TbEdit } from "react-icons/tb";
import { FaTrashCan } from "react-icons/fa6";
import { labelUnit } from "../utils/label";

const Division = () => {
  const { token } = useAuthStore();
  const [divisionData, setDivisionData] = useState([]);
  const [dataDepartement, setDataDepartement] = useState([]);

  const fetchData = async () => {
    try {
      const response = await apiGet(`/crud/unit`, token);
      setDivisionData(response.payload);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDepartement = async () => {
    const response = await apiGet(`/crud/departement`, token);
    setDataDepartement(response.payload);
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
    closeEditModal,
    handleEditUnit,
    isEditModalOpen,
    setSelectedData,
    setIsEditModalOpen,
  } = useDivision(token, fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchDepartement();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = divisionData.filter((item) =>
    item.nama_unit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditClick = (unit) => {
    setSelectedData(unit);
    setValue("nama_unit", unit.nama_unit);
    setValue("unit_code", unit.unit_code);

    console.log("Unit", unit.unit_code);
    setIsEditModalOpen(true);
  };

  const {
    register: registerUnit,
    handleSubmit: handleSubmitUnit,
    formState: { errors: errorsUnit, isSubmitting: isSubmittingUnit },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      id_departement: "",
      unit_code: "",
      nama_unit: "",
    },
  });

  const {
    register: registerEditUnit,
    handleSubmit: handleSubmitEditUnit,
    formState: { errors: errorsEditUnit, isSubmitting: isSubmittingEditUnit },
    setValue,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      nama_unit: "",
      unit_code: "",
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
      <Table label={labelUnit}>
        {filteredData.map((row, rowIndex) => (
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
      </Table>

      <AddModal
        option={dataDepartement}
        titleForm="Form Unit"
        descForm="Enter unit details to submit"
        addInput={inputUnit}
        onSubmit={handleAddUnit}
        closeModal={closeModal}
        handleSubmit={handleSubmitUnit}
        register={registerUnit}
        errors={errorsUnit}
        isSubmitting={isSubmittingUnit}
        isModalOpen={isModalOpen}
      />

      <ModalEdit
        closeModal={closeEditModal}
        errors={errorsEditUnit}
        handleSubmit={handleSubmitEditUnit}
        isSubmitting={isSubmittingEditUnit}
        isModalOpen={isEditModalOpen}
        register={registerEditUnit}
        onSubmit={handleEditUnit}
        editDepartement={inputEditUnit}
      />

      <ModalDelete
        isModalOpen={isDeleteModal}
        closeModal={closeDeleteModal}
        onSubmit={confirmDeleteUnit}
      />
    </>
  );
};

export default Division;
