import { Outlet } from "react-router-dom";
import { Sidebar, Navbar } from "@/components";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default MainLayout;
