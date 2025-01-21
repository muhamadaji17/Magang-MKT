import React from "react";

const Input = ({ typeInput, placeholder, id }) => {
  return (
    <input
      type={typeInput}
      placeholder={placeholder}
      id={id}
      className="border-2 border-slate-400 rounded-sm py-1 px-2 placeholder:text-[12px]"
    />
  );
};

export default Input;
