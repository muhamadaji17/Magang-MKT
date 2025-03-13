import { Input, Loading } from "../../components/atoms";
import { DashboardHeader } from "../../components/molecules";
import { Table } from "../../components/organisms";
import {
    cityTablePattern,
    handleCancelModal,
    handleChange,
    handleShowModalId,
    inputCity,
    inputEditCity,
} from "../../pattern";
import {
    useGetDataWithSearchHook,
    useGlobalHooks,
    useSupportGetDataHook,
} from "../../hooks";
import {
    GetCityService,
    AddCityService,
    EditCityService,
    DeleteCityService,
    GetProvinceService,
    SearchCityServices,
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
        query,
        setQuery,
        loadingSearch,
        setLoadingSearch,
    } = useGlobalHooks();

    useGetDataWithSearchHook(
        accessToken,
        query,
        setDatas,
        setLoadingData,
        setLoadingSearch,
        setReGetDatas,
        reGetDatas,
        GetCityService,
        SearchCityServices
    );

    useSupportGetDataHook(
        accessToken,
        GetProvinceService,
        setSubDatas,
        setLoadingSubData,
        setReGetDatas,
        modalType
    );

    const manipulatedSubData = subDatas.map((data) => ({
        value: data.id,
        label: data.province_name,
    }));

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
            <div className="space-x-2 space-y-1">
                {cityTablePattern
                    .filter((pattern) => pattern.key !== "url_film")
                    .map((column, index) => (
                        <Input
                            variant="h-6 text-center text-sm text-black bg-white"
                            placeholder={column.title}
                            value={query[column.key] || ""}
                            onChange={(e) =>
                                handleChange(
                                    e,
                                    column.key,
                                    setQuery,
                                    setReGetDatas
                                )
                            }
                            key={index}
                        />
                    ))}
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
                    subDatas={manipulatedSubData}
                    titleModal={"Edit City"}
                    loadingSubData={loadingSubData}
                    loadingSearch={loadingSearch}
                />
            </div>
        </div>
    );
};

export default CityPage;
