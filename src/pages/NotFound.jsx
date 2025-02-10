import { TbError404 } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='min-h-svh flex flex-col items-center justify-center'>
            <TbError404 className='w-20 h-20' />
            <div className='space-x-2 flex items-center'>
                <p className='text-center text-lg text-gray-600'>
                    Oops! The page you&apos;re looking for can&apos;t be found.
                    It may have been moved, deleted, or never existed. Try
                    checking the URL or go back to the
                </p>
                <NavLink to='/' className='text-blue-500 hover:underline'>
                    homepage
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;
