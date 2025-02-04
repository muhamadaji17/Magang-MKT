import { Searchbar } from '../../utils';
import { Button } from '../../components/atoms';
import { ModalLayout } from '../organisms';

const DashboardHeader = ({
    title,
    breadcrumb: BreadCrumb,
    breadcrumbPattern,
    handleShowModal,
    showAddModal,
    setShowAddModal,

    buttonTextAddData,
    handleModal,
    trigger,
    loading,
    setLoading,
    accessToken,
    addService,
    dataForm,
    titleModal,
    setDatas,
    setLoadingDatas,
    type,
    setReGetDatas,
}) => {
    return (
        <>
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
                            <Searchbar />
                            <Button
                                type='button'
                                className='w-48 text-white bg-blue-600 hover:bg-blue-800'
                                disable={false}
                                onClick={() => handleShowModal('add')}
                            >
                                {buttonTextAddData}
                            </Button>
                        </div>
                    </div>
                </>
            )}
            {showAddModal && (
                <ModalLayout
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
                    setDatas={setDatas}
                    setLoadingDatas={setLoadingDatas}
                    type={type}
                    setReGetDatas={setReGetDatas}
                />
            )}
        </>
    );
};

export default DashboardHeader;
