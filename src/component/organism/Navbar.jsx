import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full z-10 bg-white drop-shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <h1>Logo</h1>
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
