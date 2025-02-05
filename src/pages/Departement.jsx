import ContentLayout from "../component/layout/ContentLayout";
import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../utils";
import TableData from "../component/organism/TableData";
import ContainerContent from "../component/atom/ContainerContent";

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
      <ContentLayout>
        <ContainerContent>
          <TableData />
        </ContainerContent>
      </ContentLayout>
    </>
  );
};

export default Home;
