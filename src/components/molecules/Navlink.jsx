import { Link } from 'react-router-dom';

const Navlink = ({ href, icon: Icon, children }) => {
    return (
        <li>
            <Link
                to={href}
                className='text-blue-600 h-20 flex items-center justify-center hover:bg-slate-100 gap-2 group'
            >
                <Icon className='w-6 h-6' />
                <span className='hidden group-hover:block'>{children}</span>
            </Link>
        </li>
    );
};

export default Navlink;
