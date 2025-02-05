import { useEffect, useState } from "react";
import { apiGet, apiPut } from "../../api/apiCall";
import useAuthStore from "../../store/useAuthStore";
import { Button, Form, FormTitle, Input, Modal } from "../index";
import useModal from "../../hook/useModal";
import { useForm } from "react-hook-form";
import { showAlert } from "../../utils";
import { editDepartement } from "../../utils/dataInput";

const TableData = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null); // Untuk menyimpan data yang dipilih
  const { token } = useAuthStore();
  const { isModalOpen, openModal, closeModal } = useModal();

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

  const label = [
    { name: "Username" },
    { name: "ID Departement" },
    { name: "Departement" },
    { name: "Created At" },
    { name: "Action" },
  ];

  const limitedData = data.slice(0, 10);

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
      closeModal();
    } catch (error) {
      console.error("Gagal memperbarui data:", error);
    }
  };

  // Mengisi form dengan data yang dipilih
  const handleEditClick = (data) => {
    setSelectedData(data);
    setValue("nama_departement", data.nama_departement); // Isi form dengan data yang dipilih
    openModal();
  };

  return (
    <>
      <table className="table-fixed w-full bg-white">
        <thead>
          <tr className="text-center bg-primary text-white">
            {label.map((label, index) => (
              <th key={index} className="text-start font-semibold py-2 px-4">
                {label.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {limitedData.map((data, index) => (
            <tr key={index} className="border-2">
              <td className="text-start px-4 py-2">
                {data.created_admin.username}
              </td>
              <td className="text-start px-4 py-2">{data.departement_code}</td>
              <td className="text-start px-4 py-2">{data.nama_departement}</td>
              <td className="text-start px-4 py-2">
                {new Date(data.created_admin.createdAt).toLocaleDateString(
                  "id"
                )}
              </td>
              <td className="space-x-2 px-4 py-2">
                <Button
                  onClick={() => handleEditClick(data)} // Pass data yang ingin diedit
                  className="text-white text-sm px-4 py-2 bg-success"
                >
                  Edit
                </Button>
                <Button className="text-white bg-red-600 text-sm px-4 py-2">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <FormTitle title="Edit Departement" />
        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {editDepartement.map((input, index) => (
            <div key={index}>
              <Input
                type={input.type}
                name={input.id}
                placeholder={input.placeholder}
                className="w-full"
                {...register(input.id, input.validation)}
              />

              {errors.nama_departement && (
                <p className="text-red-500 text-sm">
                  {errors.nama_departement.message}
                </p>
              )}
            </div>
          ))}
          <div className="w-full flex justify-center items-center space-x-4">
            <Button
              className="text-white bg-red-500 text-sm px-4 py-2"
              onClick={closeModal}
            >
              Close
            </Button>
            <Button
              type="submit"
              className="text-white bg-green-500 text-sm px-4 py-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating ..." : "Update Changes"}
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default TableData;
