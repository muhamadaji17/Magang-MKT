import { Modal, FormTitle, Form, Button, Input, TextError } from "../index";

const ModalEdit = ({
  closeModal,
  editDepartement,
  onSubmit,
  isModalOpen,
  errors,
  isSubmitting,
  handleSubmit,
  register,
}) => {
  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <FormTitle title="Edit Departement" />
        <p className="text-sm text-gray-600">Change departmental data here</p>
        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {editDepartement.map((input, index) => (
            <div key={index}>
              <Input
                type={input.type}
                placeholder={input.placeholder}
                className="w-full"
                {...register(input.id, input.validation)}
              />
              {errors[input.id] && (
                <TextError>{errors[input.id].message}</TextError>
              )}
            </div>
          ))}
          <div className="w-full flex justify-center items-center space-x-4">
            <Button
              className="text-gray-700 bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2"
              onClick={closeModal}
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
    </>
  );
};

export default ModalEdit;
