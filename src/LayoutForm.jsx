import React from "react";

const LayoutForm = ({ children }) => {
  return (
    <div className="flex justify-center w-full h-screen items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {children}
    </div>
  );
};

export default LayoutForm;
