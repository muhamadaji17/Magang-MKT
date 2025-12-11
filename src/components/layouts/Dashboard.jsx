import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "../molecules";
import { useGlobalHook } from "../../hook";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { stateShowSidebar } = useGlobalHook();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isSlide, setIsSlide] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize <= 1280) {
      setIsSlide(true);
    } else if (windowSize >= 1280) {
      setIsSlide(false);
    }
  }, [windowSize]);

  return (
    <div className="flex">
      <Sidebar
        position={"left-0"}
        slide={isSlide}
        isShow={stateShowSidebar?.isShow}
        handleShow={stateShowSidebar.handleShow}
      />

      <main className="w-full h-screen overflow-x-hidden bg-gray-200">
        <Topbar handleShowSidebar={stateShowSidebar.handleShow} />
        {/* <div className="p-6 overflow-auto mt-11 md:mt-0">
          <Outlet />
        </div> */}

        <div className="p-6 mt-11">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
