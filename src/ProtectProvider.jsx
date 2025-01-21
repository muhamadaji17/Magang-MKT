import React from "react";
import { Navigate } from "react-router";

const ProtectProvider = ({ children }) => {
  if (!sessionStorage.getItem("accessToken")) return <Navigate to={"/login"} />;

  return <>{children}</>;
};

export default ProtectProvider;
