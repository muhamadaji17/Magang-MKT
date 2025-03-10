import { DashboardHeader, Loading } from "../../components/molecules";
import { Table } from "../../components/organisms";
import {
    provinceTablePattern,
    handleCancelModal,
    handleShowModalId,
    inputProvince,
    inputEditProvince,
} from "../../pattern";
import {
    useGetDataHook,
    useGlobalHooks,
    useSupportGetDataHook,
} from "../../hooks";
import {
    AddProvinceService,
    DeleteProvinceService,
    EditProvinceService,
    GetProvinceService,
    GetCountryService,
} from "../../services";

const ProvincePage = () => {
    const {
        accessToken,
        datas,
        setDatas,
        loadingData,
        setLoadingData,
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
        GetProvinceService,
        accessToken,
        setDatas,
        setLoadingData,
        reGetDatas,
        setReGetDatas
    );

    useSupportGetDataHook(
        accessToken,
        GetCountryService,
        setSubDatas,
        setLoadingSubData,
        setReGetDatas,
        modalType
    );

    if (loadingData) return <Loading />;

    return (
        <div className="w-full space-y-4">
            <DashboardHeader
                pageText="Province Page"
                buttonText="Add Province"
                dataForm={inputProvince(subDatas)}
                titleModal="Add Province"
                setReGetDatas={setReGetDatas}
                service={AddProvinceService}
                setModalType={setModalType}
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
                columns={provinceTablePattern}
                modalType={modalType}
                setShowModal={setShowModal}
                showModal={showModal}
                editService={EditProvinceService}
                inputEditPattern={inputEditProvince}
                deleteService={DeleteProvinceService}
                subDatas={subDatas}
                titleModal={"Edit Province"}
            />
        </div>
    );
};

export default ProvincePage;
