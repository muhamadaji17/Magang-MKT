import { FaDollarSign } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

export const MenuItems = [
  {
    name: "Dashboard",
    icon: MdDashboard,
    path: "/dashboard",
    activeSidebar: "",
  },

  {
    name: "Sales",
    icon: FaDollarSign,
    path: "/sales",
    activeSidebar: "/sales",
    subMenus: [
      {
        name: "Open Sales",
        path: `/sales/open`,
        activeSidebar: "/sales/open",
      },
      {
        name: "Close Sales",
        path: "/sales/close",
        activeSidebar: "/sales/close",
      },
    ],
  },
  {
    name: "Report",
    icon: FaHandHoldingDollar,
    path: "/report",
    activeSidebar: "/report",
  },
];
