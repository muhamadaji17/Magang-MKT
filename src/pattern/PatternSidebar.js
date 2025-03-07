import { RiComputerLine } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BiMoviePlay, BiWallet } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa6";
import { BsTicketDetailed } from "react-icons/bs";
import { LuPopcorn, LuDatabase, LuShieldCheck } from "react-icons/lu";
import { MdOutlineDiscount, MdPlaylistAddCheck } from "react-icons/md";
import { RxGear } from "react-icons/rx";

export const MenuItems = [
  {
    name: "Approval",
    icon: MdPlaylistAddCheck,
    path: "/#",
    activeSidebar: "/#",
    subMenus: [
      {
        name: "Aprroval",
        path: `/#/master`,
        activeSidebar: "/#/master`,",
      },
      {
        name: "Aprroval Config",
        path: `/#/master`,
        activeSidebar: "/#/master`,",
      },
    ],
  },
  {
    name: "Main",
    icon: RiComputerLine,
    path: "/main",
    activeSidebar: "/main",
    subMenus: [
      {
        name: "Dashboard",
        path: "/main/dashboard",
        activeSidebar: "/main/dashboard", // Perbaikan disini
      },
      {
        name: "Profile",
        path: "/main/profile",
        activeSidebar: "/main/profile", // Perbaikan disini
      },
    ],
  },

  {
    name: "Cinema",
    icon: HiOutlineBuildingOffice2,
    path: "/cinema",
    activeSidebar: "/cinema",
    subMenus: [
      {
        name: "Master Cinema",
        path: `/cinema/master_cinema`,
        activeSidebar: "/cinema/master_cinema",
      },
      {
        name: "Cinema Type",
        path: `/cinema/master`,
        activeSidebar: "/cinema/master`,",
      },
    ],
  },

  {
    name: "Movie",
    icon: BiMoviePlay,
    path: "/user",
    activeSidebar: "/user",
    subMenus: [
      {
        name: "Master Movie",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Production House",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
    ],
  },

  {
    name: "Showtime",
    icon: FaRegClock,
    path: "/user",
    activeSidebar: "/user",
    subMenus: [
      {
        name: "Calendar",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Schedule",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
    ],
  },

  {
    name: "Ticket",
    icon: BsTicketDetailed,
    path: "/user",
    activeSidebar: "/user",
    subMenus: [
      {
        name: "Ticket Payment Seat",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Schedule",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
    ],
  },

  {
    name: "Food & Beveage",
    icon: LuPopcorn,
    path: "/user",
    activeSidebar: "/user",
    subMenus: [
      {
        name: "Master Food",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Merchant",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "FnB Food Cinema",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "FnB Booking",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "FnB Payment",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
    ],
  },

  {
    name: "Wallet",
    icon: BiWallet,
    path: "/user",
    activeSidebar: "/user",
    subMenus: [
      {
        name: "Wallet Balance",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Wallet Topup Transaction",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Wallet Payment Transaction",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
    ],
  },

  {
    name: "Promo",
    icon: MdOutlineDiscount,
    path: "/user",
    activeSidebar: "/user",
    subMenus: [
      {
        name: "Master Voucher",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "isuser Company",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Promo Voucher User",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Voucher Free pass",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Voucher Discount",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
    ],
  },

  {
    name: "Master data",
    icon: LuDatabase,
    path: "/user",
    activeSidebar: "/user",
    subMenus: [
      {
        name: "Master Province",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Master City",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Master Studio Type",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Master Banner",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Master Rating",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
    ],
  },

  {
    name: "Auth",
    icon: LuShieldCheck,
    path: "/user",
    activeSidebar: "/user",
    subMenus: [
      {
        name: "Siagi Employee",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "User Admin",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "User Role Cinema",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Role User",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Role",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Role Menu",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Menu",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Users",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
    ],
  },

  {
    name: "Config",
    icon: RxGear,
    path: "/user",
    activeSidebar: "/user",
    subMenus: [
      {
        name: "Config Dropdown",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Config Button",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Config Legend",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Config Order",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Config Response",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Config Parameter",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Config Seq Number",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Auth Token Application",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Config Templates",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
      {
        name: "Config Wallet",
        path: `/user/master`,
        activeSidebar: "/user/master`,",
      },
    ],
  },
];
