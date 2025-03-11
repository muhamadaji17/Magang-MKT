import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="w-full p-6 fixed bg-white shadow-md z-10">
        <h1 className="font-semibold uppercase">
          {location.pathname.slice(1)}
        </h1>
      </nav>
    </>
  );
};

export default Navbar;
