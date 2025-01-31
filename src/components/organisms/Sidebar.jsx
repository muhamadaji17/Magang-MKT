import { Navlink } from '../molecules';

const Sidebar = ({ datas }) => {
    return (
        <nav className='h-full w-24 pt-16 absolute top-0 left-0 z-10 hover:w-60 flex flex-col transition-all group items-center bg-white border-r shadow-md'>
            <ul className='space-y-4 mt-5 w-full'>
                {datas.map((data, i) => (
                    <Navlink href={data.href} icon={data.icon} key={i}>
                        {data.text}
                    </Navlink>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
