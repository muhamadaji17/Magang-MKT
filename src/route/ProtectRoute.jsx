import React from "react";
import { Navigate } from "react-router";
import { useAccessToken } from "../hook";

const ProtectRoute = ({ children }) => {
  const { accessToken } = useAccessToken();
  if (!accessToken) return <Navigate to={"/login"} />;

  return <>{children}</>;
};

export default ProtectRoute;
