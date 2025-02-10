import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import BreadCrumb from '../../utils/Breadcrumb';
import {
    departmentBreadcrumb,
    handleModal,
    handleShowModal,
    inputAddDepartment,
    inputEditDepartment,
    handleShowModalId,
    handleCancelModal,
    departmentTableData,
} from '../../pattern';
import { Loading } from '../../utils';
import { Table } from '../../components/organisms';
import { DashboardHeader } from '../../components/molecules';
import { useDashboardHook, useDepartmentHook } from '../../hook';
import {
    AddDepartmentService,
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
        getDetailsData,
        setGetDetailsData,
        showModalId,
        setShowModalId,
        modalType,
        setModalType,
        reGetDatas,
        setReGetDatas,
        query,
        setQuery,
    } = useDashboardHook();

    useDepartmentHook(
        accessToken,
        query,
        setDatas,
        setLoadingDatas,
        setReGetDatas,
        reGetDatas
    );
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
                type={modalType}
                setReGetDatas={setReGetDatas}
                query={query}
                setQuery={setQuery}
            />
            {loadingDatas ? (
                <div className='w-full flex items-center justify-center'>
                    <Loading />
                </div>
            ) : (
                <Table
                    datas={datas}
                    editService={EditDepartmentService}
                    deleteService={DeleteDepartmentService}
                    accessToken={accessToken}
                    trigger={trigger}
                    loading={loading}
                    setLoading={setLoading}
                    setShowModalId={setShowModalId}
                    showModalId={showModalId}
                    handleShowModalId={(data, type) => {
                        handleShowModalId(
                            showModalId,
                            setShowModalId,
                            setGetDetailsData,
                            data,
                            setModalType,
                            type
                        );
                    }}
                    handleModal={handleModal}
                    dataForm={inputEditDepartment(getDetailsData)}
                    titleModal='Edit Department'
                    getDetailsData={getDetailsData}
                    type={modalType}
                    handleCancelModal={() =>
                        handleCancelModal(showModalId, setShowModalId)
                    }
                    setReGetDatas={setReGetDatas}
                    paginationIconNext={MdNavigateNext}
                    paginationIconPrev={MdNavigateBefore}
                    columns={departmentTableData}
                />
            )}
        </>
    );
};

export default Department;
