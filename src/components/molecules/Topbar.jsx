import Cookies from "js-cookie";
import { Button } from "../atom";
import { logoutService } from "../../service";
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const Topbar = ({ handleShowSidebar }) => {
  const username = Cookies.get("username");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-white fixed md:static top-0 left-0 right-0 p-4 shadow-md flex flex-row-reverse justify-between items-center z-50">
      <div className="relative">
        {/* Profile button */}
        <div
          className="text-gray-800 flex items-center cursor-pointer select-none"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <div className="bg-gray-400 flex justify-center items-center w-8 h-8 rounded-full text-gray-100 mr-2">
            <FaUser />
          </div>
          <span className="font-bold">{username}</span>

          <MdKeyboardArrowDown
            className={`${
              dropdownOpen ? "rotate-180" : ""
            } transition-transform duration-300 text-xl`}
          />
        </div>

        {/* Dropdown with animation */}
        <div
          className={`
            absolute top-10 right-0 mt-2 w-48 bg-white rounded-md shadow-md origin-top-right
            transition-all duration-300 ease-in-out transform
            ${
              dropdownOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }
          `}
        >
          <ul>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
              onClick={() => {
                logoutService();
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      <div className="flex space-x-4">
        <Button
          className="md:hidden text-gray-800"
          id="hamburger-btn"
          onClick={handleShowSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
