/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useSidebar } from "../../../../hook";
import { MenuItems } from "../../../../pattern";
import { Fragment, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SidebarLinkGroup from "./Sidebar";
import { GoDotFill } from "react-icons/go";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { sidebar, trigger, pathname, sidebarExpanded, setSidebarExpanded } =
    useSidebar({ setSidebarOpen, sidebarOpen });

  const [activeSubMenu, setActiveSubMenu] = useState(null); // Tambahkan state ini

  return (
    <div
      ref={sidebar}
      className={`absolute left-0 top-0 z-999 flex min-h-screen w-72 flex-col overflow-y-hidden bg-white lg:static lg:translate-x-0 transition-all duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0 sticky" : "-translate-x-full"
      }`}
    >
      {/* SIDEBAR HEADER */}
      <div className="flex items-center justify-between gap-2 h-20 mx-10">
        <Link to="/admin">
          <img
            width={80}
            height={100}
            src={"/images/logo/sams-logo.png"}
            alt="Logo"
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        ></button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear mt-4 md:mt-0">
        <nav className="mt-1 px-4 lg:mt-5 lg:px-3">
          <div>
            <ul className="mb-6 flex flex-col">
              {MenuItems.map((menu, index) => (
                <div key={index} className="text-slate-500 text-md py-1">
                  {!menu.subMenus ? (
                    <li key={index}>
                      <Link
                        to={menu.path}
                        className={`group relative flex items-center gap-2.5 rounded-sm hover:bg-sky-100 py-3 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-white/20 ${
                          menu.gap && "mt-5"
                        } ${
                          pathname.pathname === menu.activeSidebar &&
                          "bg-white/20"
                        }`}
                      >
                        <menu.icon />
                        {menu.name}
                      </Link>
                    </li>
                  ) : (
                    <SidebarLinkGroup
                      activeCondition={pathname.pathname.startsWith(menu.path)}
                      activeSubMenu={activeSubMenu}
                      setActiveSubMenu={setActiveSubMenu}
                      menuKey={menu.name}
                    >
                      {(handleClick, open) => (
                        <Fragment>
                          <Link
                            to="#"
                            className={`group relative flex ${
                              menu.gap && "mt-5"
                            } items-center gap-2.5 rounded-sm py-3 hover:bg-sky-300 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-white/20 dark:hover:bg-meta-4
                             ${
                               pathname.pathname.startsWith(menu.path) && // Menggunakan startsWith untuk kecocokan yang lebih baik
                               "bg-sky-300"
                               //  activeSubMenu === menu.name && "bg-white/20"
                             }
                            
                            `}
                            onClick={(e) => {
                              e.preventDefault();
                              sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                          >
                            <menu.icon
                              className={` ${
                                pathname.pathname === menu.path &&
                                "text-blue-200"
                              } `}
                            />
                            {menu.name}
                            <IoIosArrowDown
                              className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                open && "rotate-180"
                              }`}
                            />
                          </Link>
                          <div
                            className={`translate transform overflow-hidden ${
                              !open && "hidden"
                            }`}
                          >
                            <ul className="flex flex-col  pl-6">
                              {menu.subMenus.map((submenu, index) => (
                                <li key={index}>
                                  <Link
                                    to={submenu.path}
                                    className={`group relative flex py-3 hover:bg-black/5 items-center gap-2.5 px-4 font-medium text-bodydark2 duration-300 ease-in-out ${
                                      pathname.pathname ===
                                        submenu.activeSidebar && "bg-white/20"
                                    }`}
                                  >
                                    <GoDotFill
                                      className={` ${
                                        pathname.pathname ===
                                          submenu.activeSidebar &&
                                        "bg-blue-200 rounded-full text-blue-400"
                                      } `}
                                    />
                                    {submenu.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Fragment>
                      )}
                    </SidebarLinkGroup>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
