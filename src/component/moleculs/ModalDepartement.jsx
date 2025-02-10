import { Modal, Form, FormTitle, Input, Button, TextError } from "../index";
import { inputDepartement } from "../../utils/dataInput.js";

const ModalDepartement = ({
  isModalOpen,
  onSubmit,
  closeModal,
  register,
  handleSubmit,
  errors,
  isSubmitting,
}) => {
  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <FormTitle title="Form Departement" />
          <p className="text-gray-600 text-sm">
            Enter the department name and department code here
          </p>
          {inputDepartement.map((input, index) => (
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
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalDepartement;
