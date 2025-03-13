import { Input, Loading } from "../../components/atoms";
import { DashboardHeader } from "../../components/molecules";
import { Table } from "../../components/organisms";
import {
    provinceTablePattern,
    handleCancelModal,
    handleShowModalId,
    inputProvince,
    inputEditProvince,
    handleChange,
} from "../../pattern";
import {
    useGetDataWithSearchHook,
    useGlobalHooks,
    useSupportGetDataHook,
} from "../../hooks";
import {
    AddProvinceService,
    DeleteProvinceService,
    EditProvinceService,
    GetProvinceService,
    GetCountryService,
    SearchProvinceServices,
} from "../../services";

const ProvincePage = () => {
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
        GetProvinceService,
        SearchProvinceServices
    );

    useSupportGetDataHook(
        accessToken,
        GetCountryService,
        setSubDatas,
        setLoadingSubData,
        setReGetDatas,
        modalType
    );

    const manipulatedSubData = subDatas.map((data) => ({
        value: data.id,
        label: data.city_name,
    }));

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
                loadingSubData={loadingSubData}
            />
            <div className="space-x-2 space-y-1">
                {provinceTablePattern.map((column, index) => (
                    <Input
                        variant="h-6 text-center text-sm text-black bg-white"
                        placeholder={column.title}
                        value={query[column.key] || ""}
                        onChange={(e) =>
                            handleChange(e, column.key, setQuery, setReGetDatas)
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
                    columns={provinceTablePattern}
                    modalType={modalType}
                    setShowModal={setShowModal}
                    showModal={showModal}
                    editService={EditProvinceService}
                    inputEditPattern={inputEditProvince}
                    deleteService={DeleteProvinceService}
                    subDatas={manipulatedSubData}
                    titleModal={"Edit Province"}
                    loadingSubData={loadingSubData}
                    loadingSearch={loadingSearch}
                />
            </div>
        </div>
    );
};

export default ProvincePage;
