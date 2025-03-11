import { MdDashboard } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaFilm, FaImage } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaLandmarkFlag } from "react-icons/fa6";
import { PiCityThin } from "react-icons/pi";
import { HiBuildingLibrary } from "react-icons/hi2";
import { FaMapLocationDot } from "react-icons/fa6";

export const NavList = [
  { name: "Dashboard", path: "/", icon: MdDashboard },
  { name: "About", path: "/about", icon: IoMdInformationCircleOutline },
  { name: "Film", path: "/film", icon: FaFilm },
  { name: "Banner", path: "/banner", icon: FaImage },
  { name: "Office", path: "/office", icon: HiOutlineOfficeBuilding },
];

export const AccordionList = [
  {
    name: "Location",
    icon: FaMapLocationDot,
    children: [
      { name: "Country", path: "/country", icon: FaLandmarkFlag },
      { name: "Province", path: "/province", icon: HiBuildingLibrary },
      { name: "City", path: "/city", icon: PiCityThin },
    ],
  },
];
