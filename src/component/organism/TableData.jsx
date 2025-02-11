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
} from "../index";
import {
  fetchDepartements,
  updateDepartement,
} from "../../service/departementService";
import TableFlowbite from "../atom/TableFlowbite";
import { formatDateTime } from "../../utils/formatters";
import { showAlert } from "../../utils";
import { labelDepartement } from "../../utils/label";

import { useDepartementModal } from "../../hook/useDepartementModal";

const DepartementPage = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedData, setSelectedData] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
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

  // Fetch data dari server
  const fetchData = async () => {
    try {
      const departements = await fetchDepartements(token);
      setData(departements);
    } catch (error) {
      console.error("Error fetching data", error);
      showAlert("Error", "Gagal mengambil data", "error", 5000);
    }
  };

  const {} = useDepartementModal();

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

  // Function untuk submit form edit
  const handleEditDepartement = async (formData) => {
    try {
      if (!formData.nama_departement) {
        showAlert("Error", "Nama departemen tidak boleh kosong", "error", 5000);
        return;
      }

      const updatedData = {
        ...selectedData,
        nama_departement: formData.nama_departement,
      };

      console.log("Updated data for submission:", updatedData);

      const response = await updateDepartement(
        selectedData.id,
        updatedData,
        token
      );

      if (response) {
        showAlert("Success", response.message, "success", 5000);
        await fetchData();
        setEditModalOpen(false);
      }
    } catch (error) {
      console.error("Gagal update data departemen", error);
      showAlert("Error", "Gagal mengupdate departemen", "error", 5000);
    }
  };

  // Pencarian berdasarkan nama departemen
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.nama_departement.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center w-full pb-4">
        <SearchTable value={searchQuery} onChange={handleSearch} />
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
            </td>
          </tr>
        ))}
      </TableFlowbite>

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
