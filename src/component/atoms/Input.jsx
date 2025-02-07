import React from "react";

const Input = ({ register, name, addOptionError, ...props }) => {
  return (
    <input {...props} {...(register ? register(name, addOptionError) : {})} />
  );
};

export default Input;
