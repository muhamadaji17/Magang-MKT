import { apiPost } from "../../api/apiCall";
import useAuthStore from "../../store/useAuthStore";
import { showAlert } from "../../utils";
import { Button, SearchTable } from "../index";
import useModal from "../../hook/useModal";
import useDepartementForm from "../../hook/useDepartementForm";
import ModalDepartement from "../moleculs/ModalDepartement";

const Table = ({ children }) => {
  const { token } = useAuthStore();
  const { isModalOpen, openModal, closeModal } = useModal();
  const { register, handleSubmit, errors, isSubmitting } = useDepartementForm();

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
      <div className="flex justify-between items-center w-full py-4">
        <SearchTable />
        <Button
          onClick={openModal}
          className="text-white text-sm px-4 py-2 bg-primary"
        >
          Add Departement
        </Button>
      </div>

      <ModalDepartement
        onSubmit={onSubmit}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        isModalOpen={isModalOpen}
      />
      {children}
    </>
  );
};

export default Table;
