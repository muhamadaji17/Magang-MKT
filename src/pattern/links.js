import { LuLayoutDashboard } from "react-icons/lu";
import { PiSealWarning } from "react-icons/pi";
import { PiFilmReel } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import { IoImageOutline } from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";

export const navLink = [
  { text: "Dashboard", path: "/", icon: LuLayoutDashboard },
  { text: "About", path: "/about", icon: PiSealWarning },
  { text: "Films", path: "/films", icon: PiFilmReel },
  { text: "Banner", path: "/banner", icon: IoImageOutline },
  {
    text: "Location",
    icon: GrMapLocation,
    submenus: [
      { text: "Country", path: "/country" },
      { text: "Province", path: "/province" },
      { text: "City", path: "/city" },
      { text: "Office", path: "/office" },
    ],
  },
  {
    text: "Auth",
    icon: HiOutlineLockClosed,
    submenus: [
      { text: "User", path: "/user" },
      { text: "Role", path: "/role" },
    ],
  },
];
