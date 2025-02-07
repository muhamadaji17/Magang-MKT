import React from "react";
import { Input, Label } from "../atoms";
import { FaEyeSlash } from "react-icons/fa";

const InputForm = ({
  inputConfig,
  register,
  showPassword,
  setShowPassword,
  handleClickIcon,
  error,
}) => {
  return (
    <div className={`flex flex-col relative`}>
      {inputConfig.title && (
        <Label
          htmlFor={inputConfig.name}
          className="text-[12px]  text-slate-700"
        >
          {inputConfig.title}
        </Label>
      )}

      <Input
        id={inputConfig.name}
        type={!showPassword ? inputConfig.type : "text"}
        register={register}
        placeholder={inputConfig.placeholder}
        name={inputConfig.name}
        addOptionError={inputConfig.addOptionError}
        className={`rounded-md py-2 px-3 placeholder:text-[12px] border outline-none border-slate-400 my-2 text-sm`}
      />

      {inputConfig.type === "password" && (
        <div
          className="absolute top-9 right-3 cursor-pointer"
          onClick={() => handleClickIcon(showPassword, setShowPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <inputConfig.icon />}
        </div>
      )}

      {error && (
        <small className="text-[10px] mb-3 text-red-600">{error.message}</small>
      )}
    </div>
  );
};

export default InputForm;
