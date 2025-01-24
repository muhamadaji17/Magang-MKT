const HeaderAuth = ({
    iconHeader: IconHeader,
    iconTitle: IconTitle,
    titleText,
    children,
}) => {
    return (
        <>
            <IconHeader className='w-32 h-32 text-blue-600 drop-shadow-2xl' />
            {IconTitle ? (
                <div className='flex items-center gap-2'>
                    <h1 className='font-bold text-2xl'>{titleText}</h1>
                    <IconTitle className='text-2xl' />
                </div>
            ) : (
                <>
                    <h1 className='font-bold text-2xl'>{titleText}</h1>
                </>
            )}
            <div className='text-center'>{children}</div>
        </>
    );
};

export default HeaderAuth;
