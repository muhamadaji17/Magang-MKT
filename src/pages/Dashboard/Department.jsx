import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import BreadCrumb from '../../utils/Breadcrumb';
import {
    departmentBreadcrumb,
    handleModal,
    inputAddDepartment,
} from '../../pattern';
import { Button } from '../../components/atoms';
import { useEffect } from 'react';
import { useStore } from '../../store/store';
import { Loading } from '../../utils';
import { Searchbar } from '../../utils';
import { Table } from '../../components/organisms';
import { departmentTablePattern, sidebarLink } from '../../pattern';
import HeaderDashboard from '../../components/molecules/HeaderDashboard';
import { useGlobalHook } from '../../hook';
import { AddDepartmentService, GetDepartmentsServices } from '../../services';
import { DashboardTemplate } from '../../components/templates';
import { handleShowModal } from '../../pattern';

const Department = () => {
    const store = useStore();
    const accessToken = store.account.accessToken;

    const {
        datas,
        setDatas,
        loadingDatas,
        setLoadingDatas,
        showAddModal,
        setShowAddModal,
        trigger,
    } = useGlobalHook();

    useEffect(() => {
        setLoadingDatas(true);
        if (accessToken) {
            GetDepartmentsServices(accessToken, setDatas, setLoadingDatas);
        }
    }, [accessToken]);

    return (
        <DashboardTemplate
            sidebarLink={sidebarLink}
            showAddModal={showAddModal}
            setShowAddModal={setShowAddModal}
            handleShowModal={() =>
                handleShowModal(showAddModal, setShowAddModal)
            }
            handleModal={(e) => handleModal(e, trigger, setShowAddModal)}
            trigger={trigger}
            loading={loadingDatas}
            setLoading={setLoadingDatas}
            accessToken={accessToken}
            addService={AddDepartmentService}
            dataForm={inputAddDepartment}
            titleModal={'Add New Department'}
        >
            <HeaderDashboard
                title='Department'
                breadcrumb={BreadCrumb}
                breadcrumbPattern={departmentBreadcrumb}
            >
                <Searchbar />
                <Button
                    className='w-16 text-black border hover:bg-slate-200'
                    disable={false}
                >
                    <MdNavigateBefore className='w-5 h-5' />
                </Button>
                <Button
                    className='w-16 text-black border hover:bg-slate-200'
                    disable={false}
                >
                    <MdNavigateNext className='w-5 h-5' />
                </Button>
                <Button
                    type='button'
                    className='w-48 text-white bg-blue-600 hover:bg-blue-800'
                    disable={false}
                    onClick={() =>
                        handleShowModal(showAddModal, setShowAddModal)
                    }
                >
                    Add new Department
                </Button>
            </HeaderDashboard>
            {loadingDatas ? (
                <div className='w-full flex items-center justify-center'>
                    <Loading />
                </div>
            ) : (
                <Table headers={departmentTablePattern} datas={datas} />
            )}
        </DashboardTemplate>
    );
};

export default Department;
