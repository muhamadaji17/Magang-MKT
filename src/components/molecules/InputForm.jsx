/** @format */

import { useEffect, useState } from "react";
import { AtomSelect, Button, Input } from "../atom";
import { FaEyeSlash, FaUpload } from "react-icons/fa";
import Editor from "../organism/Editor";

const InputForm = ({
  data,
  register,
  control,
  value,
  error,
  imagePreview,
  handleFileChange,
}) => {
  const [showPassword, setShowPassword] = useState(null);
  // const { fileName, setFileName, imagePreview, setImagePreview } = state;
  // const getImageDefault = data.type === "file" ? data.defaultValue : null;
  // const imageURL = `http://${getImageDefault}`;

  // useEffect(() => {
  //   if (getImageDefault) {
  //     setImagePreview({ url: imageURL, fieldName: data.name });
  //     setFileName({ value: getImageDefault, fieldName: data.name });
  //   }
  // }, [getImageDefault, setImagePreview, setFileName]);

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setImagePreview({ url: URL.createObjectURL(file), fieldName: data.name });
  //     setFileName({ value: file.name, fieldName: data.name });
  //   } else {
  //     setImagePreview(null);
  //     setFileName("");
  //   }
  // };

  return (
    <>
      {data.type === "select" ? (
        <AtomSelect
          name={data.name}
          title={data.labelText}
          valueOptions={data.options}
          label={data.labelText}
          rules={data.optionError}
          selectTitle={data.optionDisabledText}
          // disabled={data.disabled || isDisabled}
          sx={data.sx}
          control={control}

          // className={`peer focus:text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-white ${
          //   value === undefined || value === "" ? "text-transparent" : ""
          // }`}
        />
      ) : data.type === "file" ? (
        <div className="flex flex-col">
          <div
            className={`relative ${
              data.className ? `${data.className || ""}` : "w-56 h-64"
            } border border-gray-300 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer hover:border-blue-500 transition-all`}
          >
            {imagePreview && (
              <img
                src={imagePreview?.url}
                alt="Preview"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {!imagePreview && (
              <div className="flex flex-col items-center text-gray-500">
                <FaUpload className="text-2xl mb-2" />
                <span className="text-sm">Upload {data.labelText}</span>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              {...register(data.name, data.optionError)}
              id={data.name}
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          {imagePreview && (
            <span className="text-xs mt-2 text-gray-600">
              {imagePreview?.fileName}
            </span>
          )}
        </div>
      ) : data.type === "editor_about" ? (
        <Editor
          className={`${data.className}`}
          name={data.name}
          control={control}
          rules={data.optionError}
        />
      ) : data.type === "textarea" ? (
        <textarea
          type={"text"}
          {...register(data.name, data.optionError)}
          id={data.name}
          rows={data.rows}
          className="peer w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 "
        />
      ) : data.type === "hidden" ? (
        <input
          type="hidden"
          name={data.name}
          value={data.value}
          {...register(data.name)}
          className="peer w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 "
        />
      ) : (
        <Input
          type={!showPassword ? data.type : "text"}
          register={register}
          addOptionError={data.optionError}
          id={data.name}
          label={data.labelText}
          name={data.name}
          onFocus={data.onFocus}
          max={data.max}
          min={data.min}
          sx={data.sx}
        />
      )}

      {(data.type === "editor_about" || data.type === "textarea") && (
        <label
          htmlFor={data.name}
          style={{ pointerEvents: "none" }}
          className={`
          ${
            data.type === "editor_about"
              ? "-top-2.5 text-xs px-1"
              : value !== undefined && value !== ""
              ? "-top-2.5 text-xs px-1"
              : "top-2 text-base"
          }  absolute left-4 transition-all bg-white peer-focus:text-xs peer-focus:px-1 peer-focus:-top-2.5 peer-focus:font-semibold cursor-text text-gray-500`}
        >
          {data.labelText}
        </label>
      )}

      {data.icon && (
        <Button
          type={"button"}
          className="absolute right-4 top-5"
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? <data.icon /> : <FaEyeSlash />}
        </Button>
      )}

      {error[data.name] && (
        <small className="block text-[10px] mt-2 text-red-600">
          {error[data.name]?.message}
        </small>
      )}
    </>
  );
};

export default InputForm;
