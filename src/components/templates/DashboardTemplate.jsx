import { Modal, Navbar, Sidebar } from '../../components/organisms';

const DashboardTemplate = ({
    sidebarLink,
    showAddModal,
    setShowAddModal,
    children,
    handleShowModal,
    handleModal,
    trigger,
    loading,
    setLoading,
    accessToken,
    addService,
    dataForm,
    titleModal,
}) => {
    return (
        <div className='flex flex-col min-h-svh'>
            <Navbar
                headerText='MKT'
                image='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='Evelyn'
            />
            <Sidebar datas={sidebarLink} />
            <div className='bg-slate-100 flex-1 p-5 w-full pl-28 h-screen space-y-3'>
                {children}
            </div>

            {showAddModal && (
                <Modal
                    setShowModal={setShowAddModal}
                    handleShowModal={handleShowModal}
                    handleModal={handleModal}
                    trigger={trigger}
                    loading={loading}
                    setLoading={setLoading}
                    accessToken={accessToken}
                    addService={addService}
                    dataForm={dataForm}
                    titleModal={titleModal}
                />
            )}
        </div>
    );
};

export default DashboardTemplate;
