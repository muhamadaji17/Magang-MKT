import { RxDashboard } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

export const navLinkSidebar = [
  {
    text: "Dasboard",
    destinationPath: "/",
    icon: RxDashboard,
    isActive: true,
    className:
      "hover:bg-blue-500 hover:text-white text-sm rounded-md cursor-pointer text-slate-700 my-2",
  },

  {
    text: "Departement",
    destinationPath: "/departement",
    icon: CiUser,
    isActive: false,
    className:
      "hover:bg-blue-500 hover:text-white text-sm rounded-md cursor-pointer text-slate-700 my-2",
  },

  {
    text: "Karyawan",
    destinationPath: "/karyawan",
    icon: BsPeople,
    isActive: false,
    className:
      "hover:bg-blue-500 hover:text-white text-sm rounded-md cursor-pointer text-slate-700 my-2",
  },
];
