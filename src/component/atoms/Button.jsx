import React from "react";

const ButtonSubmit = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default ButtonSubmit;
