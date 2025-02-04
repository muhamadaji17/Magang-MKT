import React from "react";
import { Input, Label } from "../atoms";
import { FaEyeSlash } from "react-icons/fa";

const InputForm = ({
  data,
  register,
  showPassword,
  setShowPassword,
  handleClickIcon,
  defaultValue,
  error,
}) => {
  return (
    <div className="flex flex-col relative">
      <Label htmlFor={data.name} className={data.labelClassName}>
        {data.title}
      </Label>

      <Input
        id={data.name}
        type={!showPassword ? data.type : "text"}
        register={register}
        placeholder={data.placeholder}
        defaultValue={defaultValue}
        name={data.name}
        addOptionError={data.addOptionError}
        className={data.inputClassName}
      />

      {data.icon && (
        <div
          className="absolute top-9 right-3 cursor-pointer"
          onClick={() => handleClickIcon(showPassword, setShowPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <data.icon />}
        </div>
      )}

      {error && (
        <small className="text-[10px] mb-3 text-red-600">{error.message}</small>
      )}
    </div>
  );
};

export default InputForm;
