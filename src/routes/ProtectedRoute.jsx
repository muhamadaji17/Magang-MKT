import { Navigate } from "react-router-dom";
import useLogin from "@/store/useLogin";
import showAlert from "@/utils/showAlert";

const ProtectedRoute = ({ children }) => {
  const { token } = useLogin();

  if (!token) {
    showAlert("error", "Account not logged in", "please login first");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
