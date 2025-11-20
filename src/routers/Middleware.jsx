import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const checkAuth = () => {
  const accessToken = Cookies.get("accessToken");
  return accessToken !== undefined;
};

const ProtectedRoute = ({ element }) => {
  return checkAuth() ? element : <Navigate to="/login" />;
};

const PublicRoute = ({ element }) => {
  return !checkAuth() ? element : <Navigate to="/" />;
};

export { ProtectedRoute, PublicRoute };
