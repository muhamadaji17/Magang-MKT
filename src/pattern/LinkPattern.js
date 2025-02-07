import { RxDashboard } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import {
  HiOutlineBuildingOffice2,
  HiOutlineBuildingOffice,
} from "react-icons/hi2";
export const navLinkSidebar = [
  {
    text: "Dasboard",
    destinationPath: "/",
    icon: RxDashboard,
  },
  {
    text: "Karyawan",
    destinationPath: "/karyawan",
    icon: BsPeople,
  },
  {
    text: "Departement",
    destinationPath: "/departement",
    icon: HiOutlineBuildingOffice,
  },
  {
    text: "Office",
    destinationPath: "/office",
    icon: HiOutlineBuildingOffice2,
  },
];
