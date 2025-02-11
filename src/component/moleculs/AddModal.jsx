import { Modal, Form, FormTitle, Input, Button, TextError } from "../index";
import { inputUnit } from "../../utils/dataInput.js";
import Select from "../atom/Select.jsx";
import useAuthStore from "../../store/useAuthStore.js";
import { useEffect, useState } from "react";
import { apiGet } from "../../api/apiCall.js";

const AddModal = ({
  isModalOpen,
  onSubmit,
  closeModal,
  register,
  handleSubmit,
  errors,
  isSubmitting,
}) => {
  const [data, setData] = useState([]);
  const { token } = useAuthStore();
  const fetchData = async () => {
    const departements = await apiGet(`/crud/departement`, token);
    setData(departements.payload);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <FormTitle title="Form Departement" />
          <p className="text-gray-600 text-sm">
            Enter the unit name and unit code here
          </p>
          <Select option={data} register={register} />
          {inputUnit.map((input, index) => (
            <div key={index}>
              <Input
                type={input.type}
                placeholder={input.placeholder}
                className="w-full p-1"
                labelName={input.labelName}
                label={input.labelName}
                {...register(input.id, input.validation)}
              />
              {errors[input.id] && (
                <TextError>{errors[input.id].message}</TextError>
              )}
            </div>
          ))}
          <div className="flex justify-center gap-4 w-full h-fit">
            <Button
              className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300"
              onClick={closeModal}
            >
              Close
            </Button>
            <Button
              className="px-4 py-2 w-fit text-white bg-success hover:bg-green-800"
              type="submit"
              onClick={onSubmit}
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddModal;
