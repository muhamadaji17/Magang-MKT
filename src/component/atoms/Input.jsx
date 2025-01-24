import React from "react";

const Input = ({ register, name, addOptionError, ...props }) => {
  return <input {...props} {...register(name, addOptionError)} />;
};

export default Input;
