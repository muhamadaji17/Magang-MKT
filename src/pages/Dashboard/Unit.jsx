import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import BreadCrumb from '../../utils/Breadcrumb';
import {
    handleModal,
    handleShowModal,
    inputAddUnit,
    inputEditUnit,
    handleShowModalId,
    handleCancelModal,
    unitTableData,
    handleChange,
} from '../../pattern';
import { getUrlDashboard, Loading } from '../../utils';
import { Table } from '../../components/organisms';
import { DashboardHeader } from '../../components/molecules';
import {
    useDashboardHook,
    useSupportDepartmentHook,
    useUnitHook,
} from '../../hook';
import {
    AddUnitService,
    EditUnitService,
    DeleteUnitService,
} from '../../services';
import { useLocation } from 'react-router-dom';

const Unit = () => {
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
        subData,
        setSubData,
    } = useDashboardHook();

    useUnitHook(
        accessToken,
        query,
        setDatas,
        setLoadingDatas,
        setReGetDatas,
        reGetDatas
    );

    useSupportDepartmentHook(
        accessToken,
        setSubData,
        setLoadingDatas,
        setReGetDatas,
        modalType
    );

    const location = useLocation();
    const patternBreadcrumb = getUrlDashboard(location);

    return (
        <>
            <DashboardHeader
                title='Unit'
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
                buttonTextAddData='Add Unit'
                handleModal={handleModal}
                trigger={trigger}
                loading={loading}
                setLoading={setLoading}
                accessToken={accessToken}
                addService={AddUnitService}
                dataForm={inputAddUnit(subData)}
                titleModal='Add Unit'
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
                    editService={EditUnitService}
                    deleteService={DeleteUnitService}
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
                    dataForm={inputEditUnit(subData, getDetailsData)}
                    titleModal='Edit Unit'
                    getDetailsData={getDetailsData}
                    type={modalType}
                    handleCancelModal={() =>
                        handleCancelModal(showModalId, setShowModalId)
                    }
                    setReGetDatas={setReGetDatas}
                    paginationIconNext={MdNavigateNext}
                    paginationIconPrev={MdNavigateBefore}
                    columns={unitTableData}
                    query={query}
                    handleChange={(e, key) => handleChange(e, key, setQuery)}
                />
            )}
        </>
    );
};

export default Unit;
