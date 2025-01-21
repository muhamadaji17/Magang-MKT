import React from "react";
import { ErrorMessage, Field } from "formik";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
const InputForForm = ({
  type = "text",
  id,
  name,
  htmlFor,
  labelText,
  placeholder,
  showPassword,
  setShowPassword,
}) => {
  const typeInputPassword = name === "password" || name === "confirmPassword";

  return (
    <div>
      <label htmlFor={htmlFor} className="text-[12px] text-slate-700">
        {labelText}
      </label>
      <div className="relative">
        <Field
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className={`w-full rounded-md py-2 px-3 placeholder:text-[12px] border border-slate-400 my-2 text-sm`}
        />
        {typeInputPassword && (
          <button
            className="absolute right-3 top-5"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
        )}
      </div>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default InputForForm;
