/** @format */

import { useEffect, useState } from "react";
import { InputForm } from ".";
import { Button, LoadingButton } from "../atom";
import { useForm } from "react-hook-form";
import { useGlobalHook } from "../../hook/useGlobalHook";
import { useDebauncedEffect } from "../../hook/useDebouncedEffect";
import { Link } from "react-router-dom";
import {
  checkSlugArticleEnService,
  checkSlugArticleIdService,
} from "../../service";
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
  ForgetPassword,
  LinkForgetPassword,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: generateDefaultValue(configInput) });
  const [imagePreview, setImagePreview] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [payloadCheckSlug, setPayloadCheckSlug] = useState({
    id: null,
    en: null,
  });

  const { loadingButton, setLoadingButton, accessToken } = useGlobalHook();

  const [article_slug_en, article_slug_id] = watch([
    "article_slug_en",
    "article_slug_id",
  ]);

  // check slug article id
  useDebauncedEffect({
    fn: () => {
      if (!article_slug_id) return;

      if (!isFirstRender) {
        if (article_slug_id) {
          checkSlugArticleIdService(
            { article_slug_id },
            { accessToken, setPayloadCheckSlug }
          );
        }
      }
    },
    deps: [article_slug_id],
    delay: 1000,
  });

  // // check slug article en
  useDebauncedEffect({
    fn: () => {
      if (!article_slug_en) return;

      if (!isFirstRender) {
        if (article_slug_en) {
          checkSlugArticleEnService(
            { article_slug_en },
            { accessToken, setPayloadCheckSlug }
          );
        }
      }
    },
    deps: [article_slug_en],
    delay: 1000,
  });

  // set field slug
  const handleSetSlug = (titleField, valueTitleField) => {
    const result = valueTitleField.toLowerCase().replace(/\s+/g, "-");

    if (titleField === "article_title_en") {
      setValue("article_slug_en", result);
    } else if (titleField === "article_title_id") {
      setValue("article_slug_id", result);
    }

    if (isFirstRender !== false) {
      setIsFirstRender(false);
    }
  };

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
    handleSubmitData(data, { reset, setImagePreview, setLoadingButton });
    setLoadingButton(true);
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
        <div className="grid grid-cols-12 gap-4">
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
                } w-full relative`}
                key={index}
              >
                <InputForm
                  data={data}
                  handleSetSlug={handleSetSlug}
                  key={index}
                  payloadCheckSlug={payloadCheckSlug}
                  register={register}
                  imagePreview={imagePreview.find(
                    (item) => item.fieldName === data.name
                  )}
                  control={control}
                  getValues={getValues}
                  handleFileChange={handleFileChange}
                  rows={5}
                  error={errors}
                  value={value}
                  onFocus={data.onFocus}
                />
              </div>
            );
          })}
        </div>
        {LinkForgetPassword && (
          <div className="mt-2">
            <Link
              to={`${LinkForgetPassword ? LinkForgetPassword : "#"}`}
              className="hover:underline hover:text-blue-600 text-blue-500 underline text-sm"
            >
              {ForgetPassword}
            </Link>
          </div>
        )}

        {forType === "sidebar" ? (
          <div className="flex gap-32 items-center w-full absolute bottom-5">
            <div className="space-x-2 flex">
              <Button
                className={"py-2 px-3 rounded-md bg-green-500 text-white"}
              >
                {loadingButton ? <LoadingButton /> : "Save"}
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
            className={`bg-blue-600 rounded-sm py-2 mt-4 w-full text-center text-white cursor-pointer hover:bg-blue-700 ${buttonClassName}`}
            type="submit"
          >
            {loadingButton ? <LoadingButton /> : buttonText}
          </Button>
        )}
      </form>
    </>
  );
};

export default Form;
