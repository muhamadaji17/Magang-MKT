import { Link } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IoPeopleSharp } from 'react-icons/io5';
import { BreadCrumb } from '../../utils';
import { employeeBreadcrumb } from '../../pattern';
import { Button } from '../../components/atoms';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const employees = [
    {
        username: 'johndoe',
        role_name: 'Software Engineer',
        company: 'Tech Innovators',
        phone_number: '+6281234567890',
    },
    {
        username: 'janesmith',
        role_name: 'Product Manager',
        company: 'NextGen Solutions',
        phone_number: '+6289876543210',
    },
    {
        username: 'michaelbrown',
        role_name: 'UI/UX Designer',
        company: 'Creative Minds',
        phone_number: '+6282233445566',
    },
    {
        username: 'emilywhite',
        role_name: 'Data Scientist',
        company: 'Big Data Analytics',
        phone_number: '+6283344556677',
    },
    {
        username: 'davidlee',
        role_name: 'DevOps Engineer',
        company: 'Cloud Tech',
        phone_number: '+6284455667788',
    },
    {
        username: 'sarahwong',
        role_name: 'Marketing Specialist',
        company: 'Digital Boost',
        phone_number: '+6285566778899',
    },
    {
        username: 'robertkim',
        role_name: 'Cybersecurity Analyst',
        company: 'SecureNet',
        phone_number: '+6286677889900',
    },
    {
        username: 'jessicapark',
        role_name: 'HR Manager',
        company: 'People First',
        phone_number: '+6287788990011',
    },
    {
        username: 'danieltan',
        role_name: 'Frontend Developer',
        company: 'WebCrafters',
        phone_number: '+6288899001122',
    },
    {
        username: 'andreasmiller',
        role_name: 'Backend Developer',
        company: 'API Works',
        phone_number: '+6289900112233',
    },
    {
        username: 'lisachang',
        role_name: 'QA Engineer',
        company: 'Bug Hunters',
        phone_number: '+6280011223344',
    },
    {
        username: 'pauljones',
        role_name: 'Business Analyst',
        company: 'Insight Solutions',
        phone_number: '+6281122334455',
    },
    {
        username: 'nancywilson',
        role_name: 'Cloud Architect',
        company: 'SkyCompute',
        phone_number: '+6282233445566',
    },
    {
        username: 'henrycooper',
        role_name: 'Full Stack Developer',
        company: 'CodeCraft',
        phone_number: '+6283344556677',
    },
    {
        username: 'samanthabaker',
        role_name: 'Graphic Designer',
        company: 'Pixel Studio',
        phone_number: '+6284455667788',
    },
    {
        username: 'kevinadams',
        role_name: 'IT Support Specialist',
        company: 'Tech Assist',
        phone_number: '+6285566778899',
    },
    {
        username: 'monicahall',
        role_name: 'Project Manager',
        company: 'AgileWorks',
        phone_number: '+6286677889900',
    },
    {
        username: 'brandonclark',
        role_name: 'AI Engineer',
        company: 'DeepMind AI',
        phone_number: '+6287788990011',
    },
    {
        username: 'angelalopez',
        role_name: 'SEO Specialist',
        company: 'Search Masters',
        phone_number: '+6288899001122',
    },
    {
        username: 'stevenyoung',
        role_name: 'Database Administrator',
        company: 'DataSecure',
        phone_number: '+6289900112233',
    },
];

const Employee = () => {
    return (
        <div className='flex flex-col min-h-svh'>
            <nav className='w-full h-16 border-b flex justify-between items-center bg-white px-12 z-40 shadow-md'>
                <h1 className='font-bold text-2xl text-blue-600'>MKT</h1>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img
                        src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='profile'
                        className='rounded-full w-12 h-12'
                    />
                    <p>Evelyn</p>
                </div>
            </nav>
            <nav className='h-full w-24 pt-16 absolute top-0 left-0 z-10 hover:w-60 flex flex-col transition-all group items-center bg-white border-r shadow-md'>
                <ul className='space-y-4 mt-5 w-full'>
                    <li>
                        <Link
                            to='/dashboard'
                            className='text-blue-600 h-20 flex items-center justify-center hover:bg-slate-100 gap-2 group'
                        >
                            <LuLayoutDashboard className='w-6 h-6' />
                            <span className='hidden group-hover:block'>
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/employee'
                            className='text-blue-600 h-20 flex items-center justify-center hover:bg-slate-100 gap-2 group'
                        >
                            <IoPeopleSharp className='w-6 h-6' />
                            <span className='hidden group-hover:block'>
                                Employee
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/department'
                            className='text-blue-600 h-20 flex items-center justify-center hover:bg-slate-100 gap-2 group'
                        >
                            <IoPeopleSharp className='w-6 h-6' />
                            <span className='hidden group-hover:block'>
                                Department
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='bg-slate-100 flex-1 p-5 w-full pl-28 h-screen space-y-3'>
                <div className='flex items-center justify-end'>
                    <BreadCrumb items={employeeBreadcrumb} />
                </div>
                <div className='space-y-2'>
                    <div className='flex justify-between items-center gap-4'>
                        <h1 className='text-2xl font-semibold'>Employee</h1>
                        <div className='flex gap-2'>
                            <Button
                                className='w-16 text-black border hover:bg-slate-200'
                                disable={false}
                            >
                                <MdNavigateBefore className='w-5 h-5' />
                            </Button>
                            <Button
                                className='w-16 text-black border hover:bg-slate-200'
                                disable={false}
                            >
                                <MdNavigateNext className='w-5 h-5' />
                            </Button>
                            <Button
                                className='w-48 text-white bg-blue-600 hover:bg-blue-800'
                                disable={false}
                            >
                                Add new employee
                            </Button>
                        </div>
                    </div>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-2'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    Nama Karyawan
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Jabatan
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Perusahaan
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Nomor Telepon
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.slice(0, 9).map((employee, i) => (
                                <tr
                                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'
                                    key={i}
                                >
                                    <th
                                        scope='row'
                                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                    >
                                        {employee.username}
                                    </th>
                                    <td className='px-6 py-4'>
                                        {employee.role_name}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {employee.company}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {employee.phone_number}
                                    </td>
                                    <td className='px-6 py-4'>
                                        <Button className='w-12 text-white bg-blue-500 hover:bg-blue-800'>
                                            Edit
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Employee;
