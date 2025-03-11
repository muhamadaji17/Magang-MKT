import { Outlet } from "react-router-dom";
import { Sidebar, Navbar } from "@/components";

const MainLayout = () => {
  return (
    <>
      <Sidebar>
        <Navbar />
        <Outlet />
      </Sidebar>
    </>
  );
};

export default MainLayout;
