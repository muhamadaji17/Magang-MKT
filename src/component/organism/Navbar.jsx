import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../atoms";

const Navbar = ({ handleShowSidebar }) => {
  return (
    <nav className="fixed top-0 w-full z-30 bg-white drop-shadow-lg">
      <div className="flex justify-between items-center px-3 md:px-6 py-4">
        <div className="flex gap-3">
          <Button
            onClick={handleShowSidebar}
            className="text-2xl mt-1 md:hidden"
          >
            <RxHamburgerMenu />
          </Button>
          <h1 className="font-bold text-2xl">Logo</h1>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-sky-600"></div>
          <span>Name</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
