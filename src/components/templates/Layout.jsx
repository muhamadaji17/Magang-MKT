import { Navbar, Sidebar } from "../organisms";
import { useGlobalHooks } from "../../hooks";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const { username, setHamburger, hamburger } = useGlobalHooks();

    return (
        <div className="flex flex-col min-h-svh relative">
            <Navbar setHamburger={setHamburger} username={username} />
            <Sidebar hamburger={hamburger} />
            <div className="bg-slate-100 flex-1 h-full relative px-2 w-full lg:pl-28 lg:pt-20 space-y-3">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
