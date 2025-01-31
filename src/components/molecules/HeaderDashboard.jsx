const HeaderDashboard = ({
    title,
    breadcrumb: BreadCrumb,
    breadcrumbPattern,
    children,
}) => {
    return (
        <div>
            {title === 'Dashboard' ? (
                <div className='flex items-center justify-end'>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <BreadCrumb items={breadcrumbPattern} />
                </div>
            ) : (
                <>
                    <div className='flex items-center justify-end'>
                        <BreadCrumb items={breadcrumbPattern} />
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <h1 className='text-2xl font-semibold'>{title}</h1>
                        <div className='flex gap-2 items-center'>
                            {children}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default HeaderDashboard;
