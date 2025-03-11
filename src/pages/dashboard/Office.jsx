import { Loading } from "../../components/atoms";
import { DashboardHeader } from "../../components/molecules";
import { Table } from "../../components/organisms";
import {
    officeTablePattern,
    handleCancelModal,
    handleShowModalId,
    inputOffice,
    inputEditOffice,
} from "../../pattern";
import {
    useGetDataHook,
    useGlobalHooks,
    useSupportGetDataHook,
} from "../../hooks";
import {
    GetOfficeService,
    AddOfficeService,
    EditOfficeService,
    DeleteOfficeService,
    GetCityService,
} from "../../services";

const OfficePage = () => {
    const {
        accessToken,
        datas,
        setDatas,
        loadingData,
        setLoadingData,
        loadingSubData,
        setLoadingSubData,
        reGetDatas,
        setReGetDatas,
        showModal,
        setShowModal,
        modalType,
        setModalType,
        getDetailsData,
        setGetDetailsData,
        subDatas,
        setSubDatas,
    } = useGlobalHooks();

    useGetDataHook(
        GetOfficeService,
        accessToken,
        setDatas,
        setLoadingData,
        reGetDatas,
        setReGetDatas
    );

    useSupportGetDataHook(
        accessToken,
        GetCityService,
        setSubDatas,
        setLoadingSubData,
        setReGetDatas,
        modalType
    );

    if (loadingData) return <Loading />;

    return (
        <div className="w-full space-y-4">
            <DashboardHeader
                pageText="Office Page"
                buttonText="Add Office"
                dataForm={inputOffice(subDatas)}
                titleModal="Add Office"
                setReGetDatas={setReGetDatas}
                service={AddOfficeService}
                setModalType={setModalType}
                loadingSubData={loadingSubData}
            />
            <Table
                datas={datas}
                handleShowModalId={(data, type) =>
                    handleShowModalId(
                        showModal,
                        setShowModal,
                        setGetDetailsData,
                        data,
                        setModalType,
                        type
                    )
                }
                getDetailsData={getDetailsData}
                handleCancelModal={handleCancelModal}
                setReGetDatas={setReGetDatas}
                columns={officeTablePattern}
                modalType={modalType}
                setShowModal={setShowModal}
                showModal={showModal}
                editService={EditOfficeService}
                inputEditPattern={inputEditOffice}
                deleteService={DeleteOfficeService}
                subDatas={subDatas}
                titleModal={"Edit Office"}
                loadingSubData={loadingSubData}
            />
        </div>
    );
};

export default OfficePage;
