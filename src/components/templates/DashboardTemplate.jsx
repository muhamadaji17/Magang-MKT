import { Navbar, Sidebar } from '../../components/organisms';
import { Outlet } from 'react-router-dom';

const DashboardTemplate = () => {
    return (
        <div className='flex flex-col min-h-svh'>
            <Navbar />
            <Sidebar />
            <div className='bg-slate-100 flex-1 p-5 w-full pl-28 space-y-3'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardTemplate;
