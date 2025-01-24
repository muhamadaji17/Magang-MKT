import React, { useState } from "react";
import { BsPeople } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { Button } from "../atoms";

const LayoutDashboard = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="min-h-screen">
      <div className="min-h-screen w-full bg-slate-200 rounded-md overflow-hidden p-2">
        <div className="flex bg-sky-100 w-full h-screen rounded-md overflow-hidden ">
          <div className="w-1/6 bg-slate-800 min-h-screen p-4">
            <header className="mb-5 flex items-center justify-between ">
              <h1 className="text-white text-2xl font-semibold">Tittle</h1>
              <Button>
                <FaBars className="text-white" />
              </Button>
            </header>
            <nav className="">
              <ul className="flex flex-col gap-3">
                <li className="hover:bg-gray-700 text-sm p-2 rounded-md cursor-pointer">
                  <a href="#" className="gap-2 text-white flex items-center ">
                    <RxDashboard />
                    Dashboard
                  </a>
                </li>
                <li className="hover:bg-gray-700 text-sm p-2 rounded-md cursor-pointer">
                  <a href="#" className="gap-2 text-white flex items-center ">
                    <BsPeople />
                    Karyawan
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="p-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
