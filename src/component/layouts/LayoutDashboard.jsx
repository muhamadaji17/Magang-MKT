import React, { useState } from "react";
import { BsPeople } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { Link, Outlet, useLocation, useParams } from "react-router";
import { CiUser } from "react-icons/ci";
import { Breadcrumb } from "../molecules";
import Navbar from "../organism/Navbar";

const LayoutDashboard = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();
  const titlePage = location.pathname.slice(1).toLocaleUpperCase();

  return (
    <div className="min-h-screen bg-custom-gray">
      <Navbar />
      <div className="flex w-full h-screen ">
        <div className="w-1/6 min-h-screen border-r-2 p-4 bg-white">
          <nav className="">
            <ul className="flex flex-col gap-3">
              <li className="hover:bg-blue-500 hover:text-white text-sm rounded-md cursor-pointer bg-blue-500 text-white">
                <Link to={"/"} className="gap-2 p-2 flex items-center ">
                  <RxDashboard />
                  Dashboard
                </Link>
              </li>
              <li className="hover:bg-blue-500 hover:text-white text-sm rounded-md cursor-pointer">
                <Link to={"/karyawan"} className="gap-2 p-2 flex items-center ">
                  <BsPeople />
                  Karyawan
                </Link>
              </li>
              <li className="hover:bg-blue-500 hover:text-white text-sm rounded-md cursor-pointer">
                <Link
                  to={"/departement"}
                  className="gap-2 p-2  flex items-center "
                >
                  <CiUser />
                  Departemen
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <main className="w-full py-5 px-7 overflow-y-auto">
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
