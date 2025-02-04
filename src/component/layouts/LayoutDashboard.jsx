import React, { useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Breadcrumb } from "../molecules";
import { Modal, Navbar, Sidebar } from "../organism";

const LayoutDashboard = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const firstLetter = location.pathname.slice(1, 2).toLocaleUpperCase();
  const titlePage = firstLetter + location.pathname.slice(2);
  const handleShowSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-custom-gray relative">
      <Navbar handleShowSidebar={handleShowSidebar} />
      <div className="flex w-full h-screen relative">
        <Sidebar show={showSidebar} />

        <main className="w-full py-5 px-7 overflow-y-auto mr-3 pt-24">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-2xl font-semibold">
              {titlePage ? titlePage : "Dahsboard"}
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
