import { useDashboardHook } from '../../hook';

const Navbar = () => {
    const { username } = useDashboardHook();
    console.log(username);

    return (
        <nav className='w-full h-16 border-b flex justify-between items-center bg-white px-12 z-40 shadow-md'>
            <h1 className='font-bold text-2xl text-blue-600'>MKT</h1>
            <div className='flex items-center gap-2'>
                <p>Welcome Back! {username}</p>
            </div>
        </nav>
    );
};

export default Navbar;
