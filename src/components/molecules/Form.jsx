/** @format */

import { useEffect, useState } from "react";
import { InputForm } from ".";
import { Button } from "../atom";
import { useForm } from "react-hook-form";

const generateDefaultValue = (configInput) => {
  return configInput?.reduce((acc, curr) => {
    if (curr.defaultValue === undefined) return acc;

    if (curr.name.includes("date")) {
      acc[curr.name] = new Date(curr.defaultValue)?.toISOString().split("T")[0];
    } else {
      acc[curr.name] = curr.defaultValue;
    }
    return acc;
  }, {});
};

const Form = ({
  configInput,
  buttonText,
  forType,
  type,
  handleSubmitData,
  buttonClassName = "",
  className,
  handleShowSidebar,
  dataDefault,
  handleOpenModal,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: generateDefaultValue(configInput) });
  const [imagePreview, setImagePreview] = useState([]);

  useEffect(() => {
    const getImageDefault = configInput.filter(
      (data) => data.type === "file" && data.defaultValue
    );

    if (getImageDefault.length === 0) return;

    const generateImagePreview = getImageDefault.map((data) => ({
      url: `http://${data.defaultValue}`,
      fileName: data.defaultValue,
      fieldName: data.name,
    }));
    setImagePreview(generateImagePreview);
  }, [setImagePreview, configInput]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const generateImagePreview = {
        url: URL.createObjectURL(file),
        fileName: file.name,
        fieldName: e.target.name,
      };
      const newImagePreview = [...imagePreview];
      const findIndex = newImagePreview.findIndex(
        (data) => data.fieldName === e.target.name
      );

      if (findIndex === -1) {
        newImagePreview.push(generateImagePreview);
      } else {
        newImagePreview[findIndex] = generateImagePreview;
      }
      setImagePreview(newImagePreview);
    } else {
      setImagePreview([]);
    }
  };

  const onSubmit = (data) => {
    handleSubmitData(data, { reset, setImagePreview });
  };

  useEffect(() => {
    const defaultValues = generateDefaultValue(configInput);
    if (type === "edit") {
      reset(defaultValues);
    } else if (type === "add") {
      const emptyValues = configInput.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {});

      setImagePreview([]);
      reset(emptyValues);
    }
  }, [type, dataDefault, reset]);

  return (
    <>
      <form
        key={type}
        onSubmit={handleSubmit(onSubmit)}
        className={`${className || ""} `}
      >
        <div className="grid grid-cols-12 gap-x-4">
          {configInput.map((data, index) => {
            const value = watch(data.name);
            return (
              <div
                className={`${
                  data.grid === 3
                    ? "md:col-span-3 col-span-12"
                    : data.grid === 4
                    ? "md:col-span-4 col-span-12"
                    : data.grid === 6
                    ? "md:col-span-6 col-span-12"
                    : data.grid === 8
                    ? "md:col-span-8 col-span-12"
                    : data.grid === 12
                    ? "md:col-span-12 col-span-12"
                    : "col-span-12"
                } w-full mb-5 relative`}
                key={index}
              >
                <InputForm
                  data={data}
                  key={index}
                  register={register}
                  imagePreview={imagePreview.find(
                    (item) => item.fieldName === data.name
                  )}
                  control={control}
                  handleFileChange={handleFileChange}
                  rows={5}
                  error={errors}
                  value={value}
                />
              </div>
            );
          })}
        </div>

        {forType === "sidebar" ? (
          <div className="flex gap-32 items-center w-full absolute bottom-5">
            <div className="space-x-2 flex">
              <Button
                className={"py-2 px-3 rounded-md bg-green-500 text-white"}
              >
                Save
              </Button>

              <Button
                className={"py-2 px-3 rounded-md bg-gray-400 text-white"}
                onClick={handleShowSidebar}
                type="button"
              >
                Cancel
              </Button>
            </div>

            {type !== "add" && (
              <div>
                <Button
                  className={"py-2 px-3 rounded-md bg-red-600 text-white"}
                  onClick={() => handleOpenModal("delete")}
                  type="button"
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Button
            className={`bg-blue-600 rounded-sm py-2 w-full text-center text-white cursor-pointer hover:bg-blue-700 ${buttonClassName}`}
            type="submit"
          >
            {buttonText}
          </Button>
        )}
      </form>
    </>
  );
};

export default Form;
