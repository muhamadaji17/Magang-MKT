const Navbar = ({ headerText, image, name }) => {
    return (
        <nav className='w-full h-16 border-b flex justify-between items-center bg-white px-12 z-40 shadow-md'>
            <h1 className='font-bold text-2xl text-blue-600'>{headerText}</h1>
            <div className='flex items-center gap-2 cursor-pointer'>
                <img
                    src={image}
                    alt='profile'
                    className='rounded-full w-12 h-12'
                />
                <p>{name}</p>
            </div>
        </nav>
    );
};

export default Navbar;
