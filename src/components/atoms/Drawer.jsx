import { useForm } from "react-hook-form";
import { Button, InputForm } from "..";

const Drawer = ({
  handleCloseModal,
  pattern,
  onSubmit,
  defaultValues,
  isOpen,
  deleteSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues });

  console.log("defaultValues", defaultValues);

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto bg-white w-80 flex flex-col justify-between 
        transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-4 h-full flex flex-col">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:text-gray-900 text-lg text-start"
            onClick={() => handleCloseModal()}
          >
            X
          </button>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-grow flex flex-col"
          >
            <div className="w-full flex flex-col gap-6">
              {pattern.map((field, index) => (
                <div key={index}>
                  <InputForm
                    field={field}
                    defaultValue={defaultValues[field.name]}
                    register={register}
                    errors={errors}
                  />
                </div>
              ))}
            </div>
          </form>
          <div className="w-full mt-auto flex gap-4">
            <Button
              className="w-full text-white"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {isSubmitting ? "Loading..." : "Save"}
            </Button>
            <Button
              className="w-full bg-red-500 text-white"
              onClick={() => deleteSubmit(defaultValues.id_banner)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
