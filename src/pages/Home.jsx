import Side from "../component/atom/Side";
import Table from "../component/atom/Table";
import { Button } from "../component";
import useAuthStore from "../store/useAuthStore";

const Home = () => {
  const { username, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <>
      <Side>
        <div class=" sm:ml-64">
          <div className="w-full flex justify-between items-center bg-white p-5">
            <h1 className="text-xl">
              Hello, <span className="font-bold">{username}!</span>
            </h1>
            <Button
              onClick={handleLogout}
              className="px-4 py-2 text-white text-sm"
            >
              Logout
            </Button>
          </div>
          <Table />
        </div>
      </Side>
    </>
  );
};

export default Home;
