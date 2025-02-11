import { RxDashboard } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { DiUnitySmall } from "react-icons/di";
import { FaPeopleRoof } from "react-icons/fa6";
import {
  HiOutlineBuildingOffice2,
  HiOutlineBuildingOffice,
} from "react-icons/hi2";

export const navLinkSidebar = [
  {
    text: "Dashboard",
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
  {
    text: "Unit",
    destinationPath: "/unit",
    icon: DiUnitySmall,
  },
  {
    text: "Jabatan",
    destinationPath: "/jabatan",
    icon: FaPeopleRoof,
  },
];
