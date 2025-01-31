import { IoPeopleSharp } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

export const sidebarLink = [
    {
        href: '/dashboard',
        icon: LuLayoutDashboard,
        text: 'Dashboard',
    },
    {
        href: '/employee',
        icon: IoPeopleSharp,
        text: 'Employee',
    },
    {
        href: '/department',
        icon: HiOutlineOfficeBuilding,
        text: 'Department',
    },
];
