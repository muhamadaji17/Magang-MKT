import Side from "../component/atom/Side";
import Table from "../component/organism/Table";
import TopBar from "../component/moleculs/TopBar";
import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../utils";
import TableData from "../component/organism/TableData";

const Home = () => {
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
      <Side />
      <div className="sm:ml-64">
        <TopBar />
        <Table>
          <TableData />
        </Table>
      </div>
    </>
  );
};

export default Home;
