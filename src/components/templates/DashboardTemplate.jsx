import { Navbar, Sidebar } from '../../components/organisms';
import { useGlobalHook } from '../../hook';
import { Outlet } from 'react-router-dom';

const DashboardTemplate = () => {
    const { username, setHamburger, hamburger } = useGlobalHook();

    return (
        <div className='flex flex-col min-h-svh relative'>
            <Navbar setHamburger={setHamburger} username={username} />
            <Sidebar hamburger={hamburger} />
            <div className='bg-slate-100 flex-1 h-full relative px-2 lg:p-5 w-full lg:pl-28 space-y-3'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardTemplate;
