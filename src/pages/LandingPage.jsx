import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className='min-h-svh flex justify-center items-center'>
            <div className='w-[500px] h-[500px] bg-authBg bg-cover bg-center flex flex-col items-center justify-center gap-10 text-white rounded'>
                <h1 className='font-bold text-3xl'>Hello World</h1>
                <div className='flex gap-4'>
                    <Link
                        to='/login'
                        className='hover:text-blue-600 hover:bg-white h-8 flex justify-center items-center rounded w-24'
                    >
                        Login
                    </Link>
                    <Link
                        to='/register'
                        className='hover:text-blue-600 hover:bg-white h-8 flex justify-center items-center rounded w-24'
                    >
                        Register
                    </Link>
                    <Link
                        to='/dashboard'
                        className='hover:text-blue-600 hover:bg-white h-8 flex justify-center items-center rounded w-24'
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default LandingPage;
