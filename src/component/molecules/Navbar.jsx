import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../atoms";
import { Dropdown } from "./";
import { IoIosArrowDown } from "react-icons/io";
import { dropdownPattern } from "../../pattern";
import { Link } from "react-router";
import { useAuthUsername } from "../../hook";

const Navbar = ({ handleShowSidebar }) => {
  const username = useAuthUsername();
  return (
    <nav className="fixed top-0 w-full z-30 bg-white drop-shadow-lg p-4 ">
      <div className="flex justify-between items-center md:px-6 ">
        <div className="flex gap-3 w-1/3">
          <Button
            onClick={handleShowSidebar}
            className="text-2xl mt-1 md:hidden"
          >
            <RxHamburgerMenu />
          </Button>
          <Link to={"/"}>
            <h1 className="font-bold text-2xl">Logo</h1>
          </Link>
        </div>

        <div className="relative group w-4/6 flex justify-end ">
          <Button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center inline-flex gap-1 items-center"
            type="button"
          >
            <div className="inline-flex items-center text-black">
              Hello! {username} <IoIosArrowDown className="mt-1" />
            </div>
          </Button>

          <Dropdown dataList={dropdownPattern} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
