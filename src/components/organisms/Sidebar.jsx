import { Navlink } from '../molecules';
import { sidebarLink } from '../../pattern';

const Sidebar = ({ hamburger }) => {
    return (
        <nav
            className={`${
                hamburger ? 'flex' : 'hidden'
            } w-60 lg:w-24 pt-16 absolute top-0 bottom-0 left-0 z-10 
            lg:hover:w-60 lg:flex flex-col lg:transition-all 
            items-center bg-white border-r shadow-md group`}
        >
            <ul className='space-y-4 mt-5 w-full'>
                {sidebarLink.map((data, i) => (
                    <Navlink href={data.href} icon={data.icon} key={i}>
                        {data.text}
                    </Navlink>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
