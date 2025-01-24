import { IoIosArrowDown } from "react-icons/io";
import { useTopbar } from "../../../../hook";
import { TbLogout2 } from "react-icons/tb";
import { handleLogout } from "../../../../pattern";

const DropdownUser = () => {
  const { trigger, setDropdownOpen, dropdownOpen, dropdown } = useTopbar();
  return (
    <div className="relative">
      <div
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4 "
      >
        <span className="hidden text-right lg:block"></span>

        <span className="h-12 w-12 rounded-full">
          <img
            // width={112}
            // height={112}
            src={"/images/sams-logo.png"}
            // src={"/assets/imgs/user-04.png"}
            alt="User"
            // priority={false}b
            className="w-full"
          />
        </span>

        <IoIosArrowDown
          className={`duration-300 ${dropdownOpen && "rotate-180 "}`}
          fontSize={20}
        />
      </div>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-60 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        {/* <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              href="/admin/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <FaRegUser fontSize={20} />
              My Profile
            </Link>
          </li>
        </ul> */}
        <button
          //   onClick={() => signOut()}
          onClick={() => handleLogout()}
          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        >
          <TbLogout2 fontSize={20} />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
