import { useEffect } from "react";
import { apiGet, apiPost } from "../../api/apiCall";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../../utils";
import {
  Modal,
  Form,
  Button,
  FormTitle,
  Input,
  SearchTable,
  TextError,
} from "../index";
import useModal from "../../hook/useModal";
import useDepartementForm from "../../hook/useDepartementForm";
import TableData from "../organism/TableData";

const Table = () => {
  const navigate = useNavigate();
  const { token, username, logout } = useAuthStore();

  useEffect(() => {
    if (!token) {
      showAlert("Warning!", "Silahkan login terlebih dahulu", "warning", 5000);
      navigate("/auth/login");
    }
  }, [token, navigate]);

  const { isModalOpen, openModal, closeModal } = useModal();

  const { register, handleSubmit, errors, isSubmitting, submit } =
    useDepartementForm();
  const onSubmit = async (data) => {
    try {
      const response = await apiPost("/crud/departement", data, token);
      showAlert("Success", response.message, "success", 5000);
      closeModal();
    } catch (error) {
      showAlert("Error", error.config.data, "error", 5000);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full justify-between items-center bg-slate-300 gap-2 px-6 pt-10">
        <div className="flex justify-between items-center w-full">
          <h1>Dashboard</h1>
          <SearchTable />
          <Button onClick={openModal} className="text-white text-sm px-4 py-2">
            Add Departement
          </Button>
        </div>
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
        <TableData />
      </div>
    </>
  );
};

export default Table;
