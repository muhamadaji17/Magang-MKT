import { Navigate } from "react-router";
import { useAuthToken } from "../hook";

const RedirectIfAuthenticated = ({ children }) => {
  const accessToken = useAuthToken();

  if (accessToken) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default RedirectIfAuthenticated;
