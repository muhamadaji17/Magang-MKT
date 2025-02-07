import { navLinkSidebar } from "../../pattern";
import { NavLink } from ".";

const Sidebar = ({ show }) => {
  return (
    <div
      className={`${
        show ? "" : "-translate-x-full"
      } absolute w-1/2  transition-all z-20 md:static md:translate-x-0 md:w-1/6 min-h-screen border-r-2  py-4 px-2 bg-white`}
    >
      <nav className="pt-20">
        <NavLink linkPatten={navLinkSidebar} />
      </nav>
    </div>
  );
};

export default Sidebar;
