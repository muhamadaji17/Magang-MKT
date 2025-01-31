import { navLinkSidebar } from "../../pattern";
import { NavLink } from "../molecules";

const Sidebar = () => {
  return (
    <div className="w-1/6 min-h-screen border-r-2  py-4 px-2 bg-white">
      <nav className="">
        <NavLink datas={navLinkSidebar} />
      </nav>
    </div>
  );
};

export default Sidebar;
