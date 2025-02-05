import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import { Button } from "../index";

const TopBar = () => {
  const { username, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <>
      <div className="w-full bg-white shadow-xl flex justify-between items-center p-5">
        <h1 className="text-xl">
          Hello, <span className="font-bold">{username}!</span>
        </h1>
        <Button
          onClick={handleLogout}
          className="px-4 py-2 text-white text-sm bg-primary"
        >
          Logout
        </Button>
      </div>
    </>
  );
};

export default TopBar;
