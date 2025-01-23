import { Link } from 'react-router-dom';

export const LinkAuth = ({ text, path, link }) => {
    return (
        <span className='text-sm flex gap-1'>
            {text}
            <Link to={path} className='text-blue-500'>
                {link}
            </Link>
        </span>
    );
};
