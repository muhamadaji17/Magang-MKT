import { useForm } from "react-hook-form";
import { Button, FormTitle, InputForm, ShowPassword } from "..";
import useGlobalHook from "@/hooks/useGlobalHook";
import { IoCloseCircle } from "react-icons/io5";

const FormTemplate = ({
  onSubmit,
  pattern,
  className,
  title,
  description,
  showCloseButton,
  onClose,
  defaultValues,
  overrideOptions,
  provinceOptions,
  officeOptions,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues });
  const { showPassword, handleShowPassword } = useGlobalHook();

  const updatedPattern = pattern?.map((field) => {
    return field.name === "id_country"
      ? { ...field, option: overrideOptions } // Jika field name adalah "id_country", gunakan overrideOptions
      : field.name === "id_province"
      ? { ...field, option: provinceOptions } // Jika field name adalah "province_id", gunakan provinceOptions
      : field.name === "id_city"
      ? { ...field, option: officeOptions }
      : field; // Jika tidak ada kondisi yang terpenuhi, kembalikan field yang asli
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-4 border-2 p-4 w-96 bg-white shadow-lg rounded-md ${
          className ? className : "w-2/3"
        }`}
      >
        <div className="relative flex items-center justify-between w-full">
          <FormTitle title={title} description={description} />
          {showCloseButton && (
            <IoCloseCircle
              onClick={onClose}
              size={35}
              className="absolute top-0 right-0 transition-all duration-300 cursor-pointer text-slate-500 hover:text-red-500"
            />
          )}
        </div>
        <div className="flex w-full gap-2">
          {defaultValues?.banner_img && (
            <div className="flex items-center justify-center w-full">
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/image/banner/${
                  defaultValues.banner_img
                }`}
                alt="Uploaded Image"
                className="object-cover min-h-full"
              />
            </div>
          )}
          <div
            className={`gap-4 w-full ${
              updatedPattern?.length > 5 ? "grid grid-cols-2" : "flex flex-col"
            }`}
          >
            {updatedPattern?.map((field, index) => (
              <div key={index}>
                <InputForm
                  field={field}
                  type={
                    field.type === "password" && showPassword
                      ? "text"
                      : field.type
                  }
                  register={register}
                  errors={errors}
                />

                {field.type === "password" && (
                  <ShowPassword
                    label={"Show Password"}
                    onChange={handleShowPassword}
                    id={"show-password"}
                    checked={showPassword}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <Button
            type="submit"
            className={`hover:bg-blue-600 transition-all duration-500 w-full text-white`}
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormTemplate;
