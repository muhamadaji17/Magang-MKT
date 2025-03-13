import { GiHamburgerMenu } from "react-icons/gi";
import { useStore } from "../../store/store";

const Navbar = ({ setHamburger, username }) => {
    const { logout } = useStore();
    return (
        <nav className="w-full fixed top-0 h-16 flex justify-between items-center bg-white px-2 lg:px-12 z-40 shadow-md">
            <div className="flex items-center gap-3">
                <GiHamburgerMenu
                    className="lg:hidden text-2xl"
                    onClick={() => setHamburger((hamburger) => !hamburger)}
                />
                <h1 className="font-bold text-2xl text-blue-600">MKT</h1>
            </div>
            <div className="flex items-center gap-4 text-sm lg:text-base">
                <p>
                    account: <span className="font-semibold">{username}</span>
                </p>
                <p className="text-red-500 cursor-pointer" onClick={logout}>
                    logout
                </p>
            </div>
        </nav>
    );
};

export default Navbar;
