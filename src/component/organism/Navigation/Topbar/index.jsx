/* eslint-disable react/prop-types */
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../../../../hook";
import DropdownUser from "./Topbar";

const Topbar = ({ ...props }) => {
  const { username, role } = useAuth();
  return (
    <header
      className={
        "sticky top-0 z-999 flex w-full bg-white  drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none"
      }
    >
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          {props.buttonResponsive ? (
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                props.setSidebarOpen(!props.sidebarOpen);
              }}
              className="z-99999 block rounded-sm  shadow-lg border  border-stroke bg-white p-1.5 dark:border-strokedark dark:bg-boxdark lg:hidden"
            >
              <i>
                <GiHamburgerMenu />
              </i>
            </button>
          ) : null}
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7 ml-auto">
          <div>
            <p>
              {username} - {role}
            </p>
          </div>
          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
