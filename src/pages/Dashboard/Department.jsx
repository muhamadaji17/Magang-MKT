import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import BreadCrumb from '../../utils/Breadcrumb';
import {
    departmentBreadcrumb,
    handleModal,
    handleShowModal,
    inputAddDepartment,
    inputEditDepartment,
    handleShowModalId,
    handleCancelModalId,
} from '../../pattern';
import { useEffect } from 'react';
import { Loading } from '../../utils';
import { Table } from '../../components/organisms';
import { departmentTablePattern } from '../../pattern';
import { DashboardHeader } from '../../components/molecules';
import { useDashboardHook } from '../../hook';
import {
    AddDepartmentService,
    GetDepartmentsServices,
    EditDepartmentService,
    DeleteDepartmentService,
} from '../../services';

const Department = () => {
    const {
        datas,
        setDatas,
        loadingDatas,
        setLoadingDatas,
        showAddModal,
        setShowAddModal,
        trigger,
        accessToken,
        loading,
        setLoading,
        getId,
        setGetId,
        showModalId,
        setShowModalId,
        modalType,
        setModalType,
        reGetDatas,
        setReGetDatas,
    } = useDashboardHook();

    useEffect(() => {
        if (accessToken && !reGetDatas) {
            GetDepartmentsServices(
                accessToken,
                setDatas,
                setLoadingDatas,
                setReGetDatas
            );
        }
    }, [reGetDatas]);

    return (
        <>
            <DashboardHeader
                title='Department'
                breadcrumb={BreadCrumb}
                breadcrumbPattern={departmentBreadcrumb}
                handleShowModal={(type) => {
                    handleShowModal(
                        showAddModal,
                        setShowAddModal,
                        setModalType,
                        type
                    );
                }}
                showAddModal={showAddModal}
                setShowAddModal={setShowAddModal}
                buttonTextAddData='Add Department'
                handleModal={handleModal}
                trigger={trigger}
                loading={loading}
                setLoading={setLoading}
                accessToken={accessToken}
                addService={AddDepartmentService}
                dataForm={inputAddDepartment}
                titleModal='Add Department'
                setDatas={setDatas}
                setLoadingDatas={setLoadingDatas}
                type={modalType}
                setReGetDatas={setReGetDatas}
            />
            {loadingDatas ? (
                <div className='w-full flex items-center justify-center'>
                    <Loading />
                </div>
            ) : (
                <Table
                    headers={departmentTablePattern}
                    datas={datas}
                    editService={EditDepartmentService}
                    deleteService={DeleteDepartmentService}
                    accessToken={accessToken}
                    trigger={trigger}
                    loading={loading}
                    setLoading={setLoading}
                    setShowModalId={setShowModalId}
                    showModalId={showModalId}
                    handleShowModalId={(id, type) => {
                        handleShowModalId(
                            showModalId,
                            setShowModalId,
                            setGetId,
                            id,
                            setModalType,
                            type
                        );
                    }}
                    handleModal={handleModal}
                    dataForm={inputEditDepartment}
                    titleModal='Edit Department'
                    getId={getId}
                    type={modalType}
                    handleCancelModalId={() =>
                        handleCancelModalId(showModalId, setShowModalId)
                    }
                    setReGetDatas={setReGetDatas}
                    paginationIconNext={MdNavigateNext}
                    paginationIconPrev={MdNavigateBefore}
                />
            )}
        </>
    );
};

export default Department;
