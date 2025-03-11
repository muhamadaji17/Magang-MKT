import { Container, Breadcrumbs, HeaderContent } from "@/components";
import useLogin from "@/store/useLogin";

const Dashboard = () => {
  const { username, roles, token } = useLogin();

  return (
    <>
      <Container>
        <HeaderContent />
      </Container>
    </>
  );
};

export default Dashboard;
