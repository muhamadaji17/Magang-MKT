import { useForm } from "react-hook-form";
import { Input, InputEditor } from "@/components/index";
import { IoCloseCircle } from "react-icons/io5";

const FormEditor = ({ inputPattern, onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col w-full gap-4 p-4 bg-white rounded-sm md:max-w-4xl"
    >
      <IoCloseCircle
        className="absolute text-red-500 -top-4 -right-4"
        size={32}
      />
      <Input
        label="Meta"
        placeholder="Insert meta"
        className="w-full rounded-none"
        {...register("about_meta", { required: "Meta is required" })}
        error={errors.about_meta}
      />
      <div className="flex flex-col w-full gap-4 md:flex-row">
        {inputPattern.map((field, index) => (
          <InputEditor
            key={index}
            {...register(field.name, field.validation)}
            setValue={setValue}
            placeholder={field.placeholder}
            error={errors[field.name]}
          />
        ))}
      </div>
      <button className="w-full p-2 text-white bg-blue-800 rounded-sm">
        {isSubmitting ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default FormEditor;
