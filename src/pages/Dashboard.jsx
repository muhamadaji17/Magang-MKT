import { Link } from 'react-router-dom';
import { useStore } from '../store/store';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IoPeopleSharp } from 'react-icons/io5';

export const Dashboard = () => {
    const { account } = useStore();
    console.log(account);

    return (
        <>
            <nav className='fixed w-full h-16 border-b flex justify-between items-center bg-white px-12 z-10 shadow-md'>
                <h1 className='font-bold text-2xl text-blue-600'>MKT</h1>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img
                        src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='profile'
                        className='rounded-full w-12 h-12'
                    />
                    <p>Lyoko Kia</p>
                </div>
            </nav>
            <div className='h-screen flex pt-16'>
                <div className='h-full w-24 hover:w-60 flex flex-col transition-all group items-center bg-white border-r shadow-md'>
                    <ul className='space-y-4 mt-5 w-full'>
                        <li>
                            <Link
                                href='/'
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
                                href='/'
                                className='text-blue-600 h-20 flex items-center justify-center hover:bg-slate-100 gap-2 group'
                            >
                                <IoPeopleSharp className='w-6 h-6' />
                                <span className='hidden group-hover:block'>
                                    Employee
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='bg-slate-100 p-5 w-full'>
                    <h1 className='text-2xl font-semibold mb-4'>Dashboard</h1>

                    <div className='w-40 h-40 bg-white shadow rounded-md flex items-center justify-center'>
                        <p className='text-gray-700'>Test</p>
                    </div>
                </div>
            </div>
        </>
    );
};
