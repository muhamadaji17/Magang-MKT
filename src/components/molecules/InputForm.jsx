/** @format */

import { useEffect, useState } from "react";
import { Button } from "../atom";
import { FaEyeSlash, FaUpload } from "react-icons/fa";
import Editor from "../organism/Editor";

const InputForm = ({ data, register, control, value, error, state }) => {
  const [showPassword, setShowPassword] = useState(null);
  const { fileName, setFileName, imagePreview, setImagePreview } = state;
  const getImageDefault = data.type === "file" ? data.defaultValue : null;
  const imageURL = `${import.meta.env.VITE_API_PUBLIC_IMG}${
    data.tableImg
  }/${getImageDefault}`;

  useEffect(() => {
    if (getImageDefault) {
      setImagePreview(imageURL);
      setFileName(getImageDefault);
    }
  }, [getImageDefault, setImagePreview, setFileName]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFileName(file.name);
    } else {
      setImagePreview(null);
      setFileName("");
    }
  };

  return (
    <>
      {data.type === "select" ? (
        <select
          {...register(data.name, data.optionError)}
          id={data.name}
          defaultValue={""}
          className={`peer focus:text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-white ${
            value === undefined || value === "" ? "text-transparent" : ""
          }`}
        >
          <option value="" disabled>
            {data.optionDisabledText}
          </option>
          {data.options?.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      ) : data.type === "file" ? (
        <div className="flex flex-col">
          <div className="relative w-56 h-64 border border-gray-300 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer hover:border-blue-500 transition-all">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="absolute inset-0 w-full h-full object-cover "
              />
            )}

            {!imagePreview && (
              <div className="flex flex-col items-center text-gray-500">
                <FaUpload className="text-2xl mb-2" />
                <span className="text-sm">Upload Image</span>
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

          {fileName && (
            <span className="text-xs mt-2 text-gray-600">{fileName}</span>
          )}
        </div>
      ) : data.type === "editor_about" ? (
        <Editor
          className={"h-[200px] mb-24"}
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
        <input
          type={!showPassword ? data.type : "text"}
          {...register(data.name, data.optionError)}
          id={data.name}
          onWheel={(e) => e.target.blur()}
          max={data.max}
          min={data.min}
          className="peer w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 "
        />
      )}

      {data.type !== "file" && (
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
          }  absolute left-4 bg-white transition-all text-gray-600 peer-focus:text-xs peer-focus:px-1 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:font-semibold cursor-text`}
        >
          {data.labelText}
        </label>
      )}

      {data.icon && (
        <Button
          type={"button"}
          className="absolute right-4 top-3"
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
