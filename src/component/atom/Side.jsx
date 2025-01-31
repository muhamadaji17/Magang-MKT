import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";

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
  ];

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 flex overflow-y-auto bg-gray-50 dark:bg-primary">
          <ul className="space-y-2 font-medium">
            {sideName.map((side, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <side.icon size={30} />
                  <span className="ms-3">{side.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* End of Sidebar */}
      {children}
    </>
  );
};

export default Side;
