import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import BreadCrumb from '../../utils/Breadcrumb';
import {
    handleModal,
    handleShowModal,
    inputAddPosition,
    inputEditPosition,
    handleShowModalId,
    handleCancelModal,
    PositionTableData,
    handleChange,
} from '../../pattern';
import { getUrlDashboard, Loading } from '../../utils';
import { Table } from '../../components/organisms';
import { DashboardHeader } from '../../components/molecules';
import { useDashboardHook, usePositionHook } from '../../hook';
import {
    AddPositionService,
    EditPositionService,
    DeletePositionService,
} from '../../services';
import { useLocation } from 'react-router-dom';

const Position = () => {
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

    usePositionHook(
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
                title='Position'
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
                buttonTextAddData='Add Position'
                handleModal={handleModal}
                trigger={trigger}
                loading={loading}
                setLoading={setLoading}
                accessToken={accessToken}
                addService={AddPositionService}
                dataForm={inputAddPosition}
                titleModal='Add Position'
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
                    editService={EditPositionService}
                    deleteService={DeletePositionService}
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
                    dataForm={inputEditPosition(getDetailsData)}
                    titleModal='Edit Position'
                    getDetailsData={getDetailsData}
                    type={modalType}
                    handleCancelModal={() =>
                        handleCancelModal(showModalId, setShowModalId)
                    }
                    setReGetDatas={setReGetDatas}
                    paginationIconNext={MdNavigateNext}
                    paginationIconPrev={MdNavigateBefore}
                    columns={PositionTableData}
                    query={query}
                    handleChange={(e, key) => handleChange(e, key, setQuery)}
                />
            )}
        </>
    );
};

export default Position;
