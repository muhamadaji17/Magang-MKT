import { Modal, FormTitle, Form, Button, Input } from "../index";

const ModalEdit = ({
  showEditModal,
  closeEditModal,
  editDepartement,
  onSubmit,
  errors,
  isSubmitting,
  handleSubmit,
  register,
}) => {
  return (
    <>
      <Modal isOpen={showEditModal} closeModal={closeEditModal}>
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
              onClick={closeEditModal}
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

export default ModalEdit;
