import { Outlet, useLocation } from "react-router";
import { Breadcrumb } from "../molecules";
import { Sidebar, Navbar } from "../molecules";
import { useState } from "react";

const LayoutDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const firstLetter = location.pathname.slice(1, 2).toLocaleUpperCase();
  const titlePage = firstLetter + location.pathname.slice(2);

  return (
    <div className="min-h-screen bg-custom-gray relative">
      <Navbar handleShowSidebar={() => setShowSidebar((prev) => !prev)} />
      <div className="flex w-full h-screen relative">
        <div className="md:w-1/6 absolute md:static w-full">
          <Sidebar
            show={showSidebar}
            handleShowSidebar={() => setShowSidebar((prev) => !prev)}
          />

          {showSidebar && (
            <div
              className="bg-black absolute w-full z-[1] h-screen opacity-50"
              onClick={() => setShowSidebar((prev) => !prev)}
            ></div>
          )}
        </div>

        <main className="w-full py-5 px-2 md:px-7 overflow-y-auto pt-32">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-2xl font-semibold">
              {titlePage ? titlePage : "Dashboard"}
            </h1>
            <Breadcrumb />
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutDashboard;
