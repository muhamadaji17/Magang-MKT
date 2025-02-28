import { IoIosArrowForward } from 'react-icons/io';
import Navlink from './NavLink';

const Accordion = ({ datas, title, state, setState, Icon }) => {
    return (
        <div className='w-full'>
            <div
                className='relative text-blue-600 h-20 flex items-center pl-8 hover:bg-slate-100 cursor-pointer'
                onClick={() => setState(!state)}
            >
                <div className='flex items-center gap-2'>
                    <Icon className='w-6 h-6' />
                    <span className='lg:hidden lg:group-hover:block'>
                        {title}
                    </span>
                </div>
                <IoIosArrowForward
                    className={`w-6 h-6 absolute top-1/2 -translate-y-1/2 right-3 ${
                        state ? 'rotate-90' : 'rotate-0'
                    } transition-all duration-300`}
                />
            </div>
            <ul
                className={`space-y-4 w-full transition-all duration-300 ${
                    state ? 'h-full opacity-100' : 'h-0 opacity-0'
                } overflow-hidden`}
            >
                {datas.map((data, i) => (
                    <Navlink
                        href={data.href}
                        icon={data.icon}
                        customLeftSpace='pl-10'
                        key={i}
                    >
                        {data.text}
                    </Navlink>
                ))}
            </ul>
        </div>
    );
};

export default Accordion;
