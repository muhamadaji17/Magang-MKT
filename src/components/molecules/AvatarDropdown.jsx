import useLogin from "@/store/useLogin";
import { useState } from "react";
import { Link } from "react-router-dom";

const AvatarDropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { logout, username, userId } = useLogin();
  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <>
      <img
        id="avatarButton"
        type="button"
        className="relative w-10 h-10 rounded-full cursor-pointer"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="User dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <div
        id="userDropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ${
          isDropdownVisible ? "absolute right-16 top-14" : "hidden"
        }`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-semibold">{username}</div>
          <div className="truncate ">Id: {userId}</div>
        </div>
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Settings
            </Link>
          </li>
        </ul>
        <div className="py-1">
          <Link
            onClick={logout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </Link>
        </div>
      </div>
    </>
  );
};

export default AvatarDropdown;
