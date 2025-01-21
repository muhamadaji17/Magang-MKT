import React from "react";

const ButtonSubmit = ({ type = "button", children, className }) => {
  return (
    <button
      type="submit"
      className={`${
        className || ""
      } bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-md w-full px-1 py-2 text-white mt-5`}
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
