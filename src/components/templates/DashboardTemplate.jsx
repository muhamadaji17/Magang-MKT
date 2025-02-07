import { Navbar, Sidebar } from '../../components/organisms';
import { useDashboardHook } from '../../hook';
import { Outlet } from 'react-router-dom';

const DashboardTemplate = () => {
    const { username, setHamburger, hamburger } = useDashboardHook();

    return (
        <div className='flex flex-col min-h-svh relative'>
            <Navbar setHamburger={setHamburger} username={username} />
            <Sidebar hamburger={hamburger} />
            <div className='bg-slate-100 flex-1 px-2 lg:p-5 w-full lg:pl-28 space-y-3'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardTemplate;
