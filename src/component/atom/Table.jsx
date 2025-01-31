import { useEffect, useState } from "react";
import { apiGet } from "../../api/apiGet";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../../utils";

import { useForm } from "react-hook-form";
import { apiCall } from "../../api/apiPost";
import {
  Modal,
  Form,
  Button,
  FormTitle,
  Input,
  SearchTable,
  TextError,
} from "../index";

const Table = () => {
  const navigate = useNavigate();
  const { token, username, logout } = useAuthStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    response();
    if (!token) {
      showAlert("Warning!", "Silahkan login terlebih dahulu", "warning", 5000);
      navigate("/auth/login");
    }
  }, [token, navigate]);

  const response = async () => {
    const result = await apiGet("/crud/departement", token);
    setData(result.payload);
  };

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  const label = [
    {
      name: "Username",
    },
    {
      name: "ID Departement",
    },
    {
      name: "Departement",
    },
    {
      name: "Created",
    },
    {
      name: "Action",
    },
  ];

  const limitedData = data.slice(0, 10);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    console.log("modal open");
    setIsModalOpen(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    departement_code: "",
    nama_departement: "",
  });

  const onSubmit = async (data) => {
    try {
      const response = await apiCall("/crud/departement", data, token);
      showAlert("Success", response.message, "success", 5000);
      setIsModalOpen(false);
    } catch (error) {
      showAlert("Error", error.config.data, "error", 5000);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full justify-between items-center rounded-md py-1 gap-2">
        <div className="w-full flex justify-between items-center">
          <h1>
            Hello, <span className="font-bold">{username}!</span>
          </h1>
          <Button
            onClick={handleLogout}
            className="px-4 py-2 text-white text-sm"
          >
            Logout
          </Button>
        </div>
        <div className="flex justify-between items-center w-full">
          <h1>Dashboard</h1>
          <SearchTable />
          <Button onClick={openModal} className="text-white text-sm px-4 py-2">
            Add Departement
          </Button>
        </div>
        <table className="table-fixed border-2 w-full">
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <Form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <FormTitle title="Form Departement" />
              <Input
                placeholder="Nama Departement"
                className="w-full p-1"
                labelName="Nama Departement"
                label="Nama Departement"
                {...register("nama_departement", {
                  required: "Nama Departement is Required",
                })}
              />
              {errors.nama_departement && (
                <TextError>{errors.nama_departement.message}</TextError>
              )}
              <Input
                placeholder="Kode Departement"
                className="w-full p-1"
                labelName="Kode Departement"
                label="Kode Departement"
                {...register("departement_code", {
                  required: "Kode Departement is Required",
                })}
              />
              {errors.departement_code && (
                <TextError>{errors.departement_code.message}</TextError>
              )}
              <div className="flex justify-center gap-4 w-full h-fit">
                <Button
                  className="px-4 py-2 w-fit text-white bg-slate-600"
                  onClick={closeModal}
                  type={"button"}
                >
                  Close
                </Button>
                <Button type="submit" className="px-4 py-2 w-fit text-white">
                  {isSubmitting ? "Loading..." : "Submit"}
                </Button>
              </div>
            </Form>
          </Modal>
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
                <td className="text-start px-4 py-2">
                  {data.departement_code}
                </td>
                <td className="text-start px-4 py-2">
                  {data.nama_departement}
                </td>
                <td className="text-start px-4 py-2">
                  {new Date(data.created_admin.createdAt).toLocaleDateString(
                    "id"
                  )}
                </td>
                <td className=" space-x-2 px-4 py-2">
                  <Button className="text-white text-sm px-4 py-2">Edit</Button>
                  <Button className="text-white bg-red-600 text-sm px-4 py-2">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
