/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useSidebar } from "../../../../hook";
import { MenuItems } from "../../../../pattern";
import { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SidebarLinkGroup from "./Sidebar";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { sidebar, trigger, pathname, sidebarExpanded, setSidebarExpanded } =
    useSidebar({ setSidebarOpen, sidebarOpen });

  return (
    <div
      ref={sidebar}
      className={`absolute left-0 top-0 z-999  flex min-h-screen w-65 flex-col overflow-y-hidden bg-[#004487] lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0 sticky" : "-translate-x-full"
      }`}
      // className={`absolute left-0 top-0 z-999  flex min-h-screen w-65 flex-col overflow-y-hidden bg-[#004487] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
      //   sidebarOpen ? "translate-x-0 sticky" : "-translate-x-full"
      // }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2  h-20 mx-auto">
        {/* <div className="flex items-center justify-between gap-2 px-6 pt-5 bg-red-200"> */}
        <Link to="/admin">
          <img
            width={75}
            height={32}
            src={"/images/sams-logo.png"}
            alt="Logo"
            // priority={true}
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
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear mt-4 md:mt-0">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-1  px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5 ">
              {MenuItems.map((menu, index) => (
                <div key={index} className="text-white">
                  {!menu.subMenus ? (
                    <li key={index}>
                      <Link
                        to={menu.path}
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-white/20  ${
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
                    <>
                      <SidebarLinkGroup
                        activeCondition={
                          pathname.pathname === menu.path ||
                          pathname.pathname.includes(menu.name)
                        }
                      >
                        {(handleClick, open) => {
                          return (
                            <Fragment>
                              <Link
                                to="#"
                                className={`group relative flex  ${
                                  menu.gap && "mt-5"
                                } items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-white/20 dark:hover:bg-meta-4 ${
                                  (pathname.pathname === menu.path ||
                                    pathname.pathname.includes(
                                      menu.activeSidebar
                                    )) &&
                                  "bg-white/20"
                                }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  sidebarExpanded
                                    ? handleClick()
                                    : setSidebarExpanded(true);
                                }}
                              >
                                <menu.icon />
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
                                <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                  {menu.subMenus.map((submenu, index) => (
                                    <li key={index}>
                                      <Link
                                        to={submenu.path}
                                        className={`group relative flex items-center gap-2.5  px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                          pathname.pathname ===
                                            submenu.activeSidebar &&
                                          "bg-white/20"
                                        } `}
                                      >
                                        {submenu.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </Fragment>
                          );
                        }}
                      </SidebarLinkGroup>
                    </>
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
