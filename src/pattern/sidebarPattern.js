import { IoDocumentTextOutline, IoImageOutline, IoHome } from "react-icons/io5";
import { FaAddressCard, FaFlag } from "react-icons/fa6";
import { GiFilmStrip } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiBuildingOfficeDuotone, PiCity } from "react-icons/pi";

export const sidebarPattern = [
    {
        href: "/dashboard",
        icon: LuLayoutDashboard,
        text: "Dashboard",
    },
    {
        href: "about",
        icon: IoDocumentTextOutline,
        text: "About",
    },
    {
        href: "films",
        icon: GiFilmStrip,
        text: "Films",
    },
    {
        href: "#",
        icon: FaAddressCard,
        text: "Address",
        subLink: [
            {
                icon: PiBuildingOfficeDuotone,
                href: "office",
                text: "Office",
            },
            {
                icon: PiCity,
                href: "city",
                text: "City",
            },
            {
                icon: IoHome,
                href: "province",
                text: "Province",
            },
            {
                icon: FaFlag,
                href: "country",
                text: "Country",
            },
        ],
    },
    {
        href: "banner",
        icon: IoImageOutline,
        text: "Banners",
    },
];
