import { useLocation } from "react-router-dom";
import { AvatarDropdown } from "..";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="sm:pl-64 w-full p-6 fixed flex justify-between items-center bg-white shadow-md z-10">
        <div className="w-full px-8 flex justify-between items-center">
          <h1 className="font-bold text-2xl">
            {location.pathname === "/"
              ? "Dashboard"
              : location.pathname.slice(1, 2).toUpperCase() +
                location.pathname.slice(2)}
          </h1>
          <AvatarDropdown />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
