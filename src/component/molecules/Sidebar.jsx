import { navLinkSidebar } from "../../pattern";
import NavLink from "./NavLink";

const Sidebar = ({ show }) => {
  return (
    <div
      className={`${
        show ? "" : "-translate-x-full"
      } absolute bg-white w-1/2 md:w-full p-2 pt-4 z-10 transition-all right-0 left-0  md:static md:translate-x-0  min-h-screen border-r-2`}
    >
      <nav className="pt-20">
        <NavLink linkPatten={navLinkSidebar} />
      </nav>
    </div>
  );
};

export default Sidebar;
