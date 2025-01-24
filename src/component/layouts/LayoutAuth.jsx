import React from "react";

const LayoutAuth = ({ title, children }) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex justify-center items-center min-h-screen min-w-screen">
        <div className="flex justify-center items-center flex-col p-5 rounded-md bg-white w-96 h-fit">
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
