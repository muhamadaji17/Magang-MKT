export const SupportAuthTemplate = ({ children }) => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex flex-col justify-center items-center gap-4 w-[90%] lg:w-[700px]'>
                {children}
            </div>
        </div>
    );
};
