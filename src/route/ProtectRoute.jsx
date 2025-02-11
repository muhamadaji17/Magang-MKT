import { Navigate } from "react-router";
import { useAuthToken } from "../hook";

const ProtectRoute = ({ children }) => {
  const accessToken = useAuthToken();
  if (!accessToken) return <Navigate to={"/login"} />;

  return children;
};

export default ProtectRoute;
