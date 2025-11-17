import { LuLayoutDashboard } from "react-icons/lu";
import { PiSealWarning } from "react-icons/pi";
import { PiFilmReel } from "react-icons/pi";
import { IoImageOutline } from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";
import { GoDatabase } from "react-icons/go";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { GrArticle } from "react-icons/gr";
import { sub } from "date-fns";

export const navLink = [
  { text: "Dashboard", path: "/", icon: LuLayoutDashboard },
  { text: "About", path: "/about", icon: PiSealWarning },
  { text: "Films", path: "/films", icon: PiFilmReel },
  { text: "Banner", path: "/banner", icon: IoImageOutline },
  {
    text: "Office",
    path: "/office",
    icon: HiOutlineBuildingOffice,
  },
  {
    text: "Articles",

    icon: GrArticle,
    submenus: [
      { text: "Master Articles", path: "/articles" },
      { text: "Article Categories", path: "/article-categories" },
    ],
  },
  {
    text: "Master Data",
    icon: GoDatabase,
    submenus: [
      { text: "Country", path: "/country" },
      { text: "Province", path: "/province" },
      { text: "City", path: "/city" },
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
