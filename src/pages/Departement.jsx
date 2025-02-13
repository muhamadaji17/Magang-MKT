import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../utils";
import TableData from "../component/organism/TableData";

const Departement = () => {
  const { token } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      showAlert("Warning!", "Silahkan login terlebih dahulu", "warning", 5000);
      navigate("/auth/login");
    }
  }, [token, navigate]);

  return (
    <>
      <TableData />
    </>
  );
};

export default Departement;
