import { Link } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IoPeopleSharp } from 'react-icons/io5';
import { BreadCrumb } from '../../utils';

const Dashboard = () => {
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
                <div>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-2xl font-semibold'>Dashboard</h1>
                        <BreadCrumb />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='h-80 bg-gradient-to-r from-[#191714] to-[#2234AE] flex flex-col justify-center items-center shadow-md rounded-md text-white'>
                        <div className='h-16 flex items-center justify-center w-full'>
                            <h2 className='text-xl text-center font-semibold'>
                                Total Employee
                            </h2>
                        </div>
                        <div className='flex-1 flex justify-center items-center w-full'>
                            <p className='text-3xl font-semibold'>24</p>
                        </div>
                    </div>
                    <div className='h-80 bg-gradient-to-r from-[#191714] to-[#2234AE] flex flex-col justify-center items-center shadow-md rounded-md text-white'>
                        <div className='h-16 flex items-center justify-center w-full'>
                            <h2 className='text-xl text-center font-semibold'>
                                Total Department
                            </h2>
                        </div>
                        <div className='flex-1 flex justify-center items-center w-full'>
                            <p className='text-3xl font-semibold'>24</p>
                        </div>
                    </div>
                    <div className='h-80 bg-gradient-to-r from-[#191714] to-[#2234AE] flex flex-col justify-center items-center shadow-md rounded-md text-white'>
                        <div className='h-16 flex items-center justify-center w-full'>
                            <h2 className='text-xl text-center font-semibold'>
                                Total Division
                            </h2>
                        </div>
                        <div className='flex-1 flex justify-center items-center w-full'>
                            <p className='text-3xl font-semibold'>24</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
