import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import BreadCrumb from '../../utils/Breadcrumb';
import {
    handleModal,
    handleShowModal,
    inputAddDepartment,
    inputEditDepartment,
    handleShowModalId,
    handleCancelModal,
    departmentTableData,
    handleChange,
} from '../../pattern';
import { getUrlDashboard, Loading } from '../../utils';
import { Table } from '../../components/organisms';
import { DashboardHeader } from '../../components/molecules';
import { useDashboardHook, useDepartmentHook } from '../../hook';
import {
    AddDepartmentService,
    EditDepartmentService,
    DeleteDepartmentService,
} from '../../services';
import { useLocation } from 'react-router-dom';

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

    const location = useLocation();
    const patternBreadcrumb = getUrlDashboard(location);

    return (
        <>
            <DashboardHeader
                title='Department'
                breadcrumb={BreadCrumb}
                breadcrumbPattern={patternBreadcrumb}
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
                    query={query}
                    handleChange={(e, key) => handleChange(e, key, setQuery)}
                />
            )}
        </>
    );
};

export default Department;
