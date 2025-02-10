import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { MdDiversity3 } from "react-icons/md";

const Side = ({ children }) => {
  const sideName = [
    {
      name: "Dashboard",
      path: "/",
      icon: LuLayoutDashboard,
    },
    {
      name: "Departement",
      path: "/departement",
      icon: HiOutlineOfficeBuilding,
    },
    {
      name: "Division",
      path: "/division",
      icon: MdDiversity3,
    },
  ];

  const location = useLocation();

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 flex overflow-y-auto bg-primary">
          <ul className="space-y-2 font-medium">
            {sideName.map((side, index) => {
              const isActive = location.pathname === side.path;

              return (
                <li key={index}>
                  <Link
                    to={side.path}
                    className={`flex items-center p-2 rounded-lg  ${
                      isActive ? "text-accent" : "hover:text-accent text-white"
                    }`}
                  >
                    <side.icon size={30} />
                    <span className="ms-3">{side.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      {/* End of Sidebar */}
      {children}
    </>
  );
};

export default Side;
