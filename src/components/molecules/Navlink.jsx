import { Link } from 'react-router-dom';

const Navlink = ({ href, icon: Icon, customLeftSpace, children }) => {
    return (
        <li>
            <Link
                to={href}
                className={`text-blue-600 h-20 flex items-center ${
                    customLeftSpace ? customLeftSpace : 'pl-8'
                } hover:bg-slate-100 gap-2`}
            >
                <Icon className='w-6 h-6' />
                <span className='lg:hidden lg:group-hover:block'>
                    {children}
                </span>
            </Link>
        </li>
    );
};

export default Navlink;
