import { useForm } from "react-hook-form";
import { ModalForm, Input } from "../index";
import { apiCall } from "../../api/apiPost";

import { showAlert } from "../../utils";
import { useState } from "react";
import useAuthStore from "../../store/useAuthStore";

const ModalPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token } = useAuthStore();
  const openModal = () => {
    console.log("modal open");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    nama_departement: "",
    departement_code: "",
  });

  const onSubmit = async (data) => {
    try {
      const response = await apiCall("/crud/departement", data, token);
      showAlert("Success", response.message, "success", 5000);
      console.log(response);
    } catch (error) {
      showAlert("Error", error.config.data, "error", 5000);
      console.log(error);
    }
  };

  return (
    <>
      <ModalForm>
        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <FormTitle title={"Masukkan Data"} />
          <Input
            placeholder="Nama Departement"
            className="w-full p-1"
            labelName="Nama Departement"
            label="Nama Departement"
            {...register("nama_departement", {
              required: "Nama Departement is Required",
            })}
          />
          <Input
            placeholder="Kode Departement"
            className="w-full p-1"
            labelName="Kode Departement"
            label="Kode Departement"
            {...register("departement_code", {
              required: "Kode Departement is Required",
            })}
          />
          <div className="flex justify-center gap-3">
            <button
              onClick={closeModal}
              className="bg-green-500 text-white py-2 px-4  rounded-md mt-4"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-primary text-white p-2 px-4 rounded-md mt-4"
            >
              Submit
            </button>
          </div>
        </Form>
      </ModalForm>
    </>
  );
};

export default ModalPost;
