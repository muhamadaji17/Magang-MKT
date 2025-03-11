import { Container, Breadcrumbs } from "@/components";
import useLogin from "@/store/useLogin";

const Dashboard = () => {
  const { username, roles, token } = useLogin();
  console.log(token);

  return (
    <>
      <Container className="space-y-6 border-2">
        <div className="flex justify-between items-center">
          <Breadcrumbs />
          <p>{username}</p>
          <p>{roles}</p>
          <button className="px-4 py-2 rounded-md bg-blue-500">Add Post</button>
        </div>
        <div className="border-2">
          <h1>Dashboard</h1>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
