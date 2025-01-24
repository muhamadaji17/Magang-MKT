export const AuthTemplate = ({ title, titleBg, descriptionBg, children }) => {
    return (
        <div className='grid lg:grid-cols-[2fr,1.5fr] rounded-lg h-screen'>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <h2 className='font-bold text-2xl md:text-3xl'>{title}</h2>
                <div className='flex flex-col items-center gap-2'>
                    {children}
                </div>
            </div>
            <div className='bg-authBg bg-cover hidden lg:flex flex-col items-center justify-center gap-3'>
                <h1 className='text-white font-bold text-4xl'>{titleBg}</h1>
                <span className='text-white font-bold text-4xl'>
                    {descriptionBg}
                </span>
            </div>
        </div>
    );
};
