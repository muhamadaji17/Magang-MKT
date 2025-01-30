import { Form, FormTitle, Input, Section } from "../component";
import Sidebar from "../component/atom/Sidebar";
import Table from "../component/atom/Table";
import useAuthStore from "../store/useAuthStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { apiCall } from "../api/apiPost";
import { showAlert } from "../utils";
import Modal from "../component/atom/Modal";

const Home = () => {
  const { token, logout } = useAuthStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
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
    departement_code: "",
    nama_departement: "",
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
      <Section className="flex">
        <Sidebar />
        <div className="w-5/6 h-screen flex flex-col">
          <div className="w-full p-2 px-8 flex justify-between items-center  text-primary border-b-2">
            <h1>Admin</h1>
            <button
              className="px-4 py-2 bg-primary text-white rounded-md"
              onClick={logout}
            >
              Logout
            </button>
          </div>

          <div className="w-full px-8 py-2 space-y-4">
            <div className="flex w-full justify-between items-center border-2 rounded-md p-2">
              <Input placeholder="Search" className="px-4 py-2" />
              <button onClick={openModal}>Add Data</button>
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
              </Modal>
            </div>
            <div className="w-full h-full">
              <Table />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
