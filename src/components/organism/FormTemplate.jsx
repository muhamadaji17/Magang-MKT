import { useForm } from "react-hook-form";
import { Button, FormTitle, InputForm, ShowPassword } from "..";
import useGlobalHook from "@/hooks/useGlobalHook";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";
import { IoCloudUpload } from "react-icons/io5";

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
  ...props
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues });

  const [imagePreview, setImagePreview] = useState(null);
  const { showPassword, handleShowPassword } = useGlobalHook();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);
    }
  };

  const defaultImage = `${import.meta.env.VITE_IMAGE_URL}/image/films/${
    defaultValues?.poster_film
  }`;
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
        className={`space-y-4 p-4 w-[400px] bg-white shadow-lg rounded-md ${
          className ? className : "w-2/3"
        }`}
        {...props}
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
        <div
          className={`gap-4 w-full ${
            updatedPattern?.length > 5 ? "grid grid-cols-2" : "flex flex-col"
          }`}
        >
          {updatedPattern?.map((field, index) => (
            <div key={index}>
              {field.type === "file" ? (
                <>
                  <h1 className="font-semibold mb-2">Banner Image</h1>
                  <div className="w-1/2 flex justify-center items-center cursor-pointer h-40 bg-slate-300 rounded-md relative mb-4">
                    {imagePreview ? (
                      <img
                        alt="preview"
                        src={imagePreview}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : defaultValues?.poster_film ? (
                      <img
                        src={defaultImage}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <IoCloudUpload size={35} className="text-slate-700" />
                    )}
                    <InputForm
                      field={field}
                      register={register}
                      errors={errors}
                      onChange={handleImageUpload}
                      className={
                        "h-full w-full z-40 opacity-0 left-0 top-0 absolute cursor-pointer"
                      }
                    />
                  </div>
                  <p className="text-slate-600 text-sm">Max image size 1 mb</p>
                </>
              ) : (
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
              )}

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
        <div className="flex w-full gap-4">
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
