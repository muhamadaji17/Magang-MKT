import { CiSearch } from 'react-icons/ci';
import { Button, Input } from '../../components/atoms';
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
    type,
    setReGetDatas,
    query,
    setQuery,
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
                    <div className='flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center gap-4'>
                        <h1 className='text-2xl font-semibold'>{title}</h1>
                        <div className='flex gap-2 items-center'>
                            <div className='relative'>
                                <Input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder='Search'
                                    type='search'
                                    variant='no-clear'
                                />
                                <CiSearch className='absolute top-2 right-2 w-6 h-6' />
                            </div>
                            <Button
                                type='button'
                                className='w-48 text-white bg-blue-600 hover:bg-blue-800 text-sm lg:text-base'
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
                    type={type}
                    setReGetDatas={setReGetDatas}
                />
            )}
        </>
    );
};

export default DashboardHeader;
