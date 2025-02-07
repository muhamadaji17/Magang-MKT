import { IoPeopleSharp, IoTimeOutline } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { RiUserCommunityLine } from 'react-icons/ri';
import { PiBuildingOffice } from 'react-icons/pi';
import { FaPeopleRoof } from 'react-icons/fa6';

export const sidebarLink = [
    {
        href: '/dashboard',
        icon: LuLayoutDashboard,
        text: 'Dashboard',
    },
    {
        href: '/dashboard/employee',
        icon: IoPeopleSharp,
        text: 'Employee',
    },
    {
        href: '/dashboard/department',
        icon: HiOutlineOfficeBuilding,
        text: 'Department',
    },
    {
        href: '/dashboard/unit',
        icon: RiUserCommunityLine,
        text: 'Unit',
    },
    {
        href: '/dashboard/position',
        icon: FaPeopleRoof,
        text: 'Position',
    },
    {
        href: '/dashboard/office',
        icon: PiBuildingOffice,
        text: 'Office',
    },
    {
        href: '/dashboard/shift',
        icon: IoTimeOutline,
        text: 'Shift',
    },
];
