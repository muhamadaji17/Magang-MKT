import { DashboardHeader, Loading } from "../../components/molecules";
import { Table } from "../../components/organisms";
import {
    cityTablePattern,
    handleCancelModal,
    handleShowModalId,
    inputCity,
    inputEditCity,
} from "../../pattern";
import {
    useGetDataHook,
    useGlobalHooks,
    useSupportGetDataHook,
} from "../../hooks";
import {
    GetCityService,
    AddCityService,
    EditCityService,
    DeleteCityService,
    GetProvinceService,
} from "../../services";

const CityPage = () => {
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
        GetCityService,
        accessToken,
        setDatas,
        setLoadingData,
        reGetDatas,
        setReGetDatas
    );

    useSupportGetDataHook(
        accessToken,
        GetProvinceService,
        setSubDatas,
        setLoadingSubData,
        setReGetDatas,
        modalType
    );

    if (loadingData) return <Loading />;

    return (
        <div className="w-full space-y-4">
            <DashboardHeader
                pageText="City Page"
                buttonText="Add City"
                dataForm={inputCity(subDatas)}
                titleModal="Add City"
                setReGetDatas={setReGetDatas}
                service={AddCityService}
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
                columns={cityTablePattern}
                modalType={modalType}
                setShowModal={setShowModal}
                showModal={showModal}
                editService={EditCityService}
                inputEditPattern={inputEditCity}
                deleteService={DeleteCityService}
                subDatas={subDatas}
                titleModal={"Edit City"}
                loadingSubData={loadingSubData}
            />
        </div>
    );
};

export default CityPage;
