import {
  Modal,
  Form,
  FormTitle,
  Input,
  Button,
  TextError,
  Select,
} from "../index";

const ModalDepartement = ({
  isModalOpen,
  onSubmit,
  closeModal,
  register,
  handleSubmit,
  errors,
  isSubmitting,
  addInput,
  titleForm,
  descForm,
  option,
  token,
  setRefresh,
}) => {
  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Form
          onSubmit={handleSubmit((data) =>
            onSubmit(data, token, closeModal, setRefresh)
          )}
          className="space-y-3"
        >
          <FormTitle title={titleForm} />
          <p className="text-gray-600 text-sm">{descForm}</p>
          {addInput.map((input, index) => (
            <div key={index}>
              {input.isSelect ? (
                <form className="max-w-sm mx-auto">
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    {...register(input.id, input.validation)}
                  >
                    <option selected>Choose One</option>
                    {option.length > 0 ? (
                      option.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.nama_departement}
                        </option>
                      ))
                    ) : (
                      <option>No data available</option>
                    )}
                  </select>
                </form>
              ) : (
                <>
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
                </>
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
