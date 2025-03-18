import { Input, Loading } from "../../components/atoms";
import { DashboardHeader } from "../../components/molecules";
import { Table } from "../../components/organisms";
import {
    officeTablePattern,
    handleCancelModal,
    handleShowModalId,
    inputOffice,
    inputEditOffice,
    handleChange,
    officeSearchPattern,
} from "../../pattern";
import {
    useGetDataWithSearchHook,
    useGlobalHooks,
    useSupportGetDataHook,
} from "../../hooks";
import {
    GetOfficeService,
    AddOfficeService,
    EditOfficeService,
    DeleteOfficeService,
    GetCityService,
    SearchOfficeServices,
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
        GetOfficeService,
        SearchOfficeServices
    );

    useSupportGetDataHook(
        accessToken,
        GetCityService,
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
                pageText="Office Page"
                buttonText="Add Office"
                dataForm={inputOffice(subDatas)}
                titleModal="Add Office"
                setReGetDatas={setReGetDatas}
                service={AddOfficeService}
                setModalType={setModalType}
                loadingSubData={loadingSubData}
            />
            <div className="space-y-1">
                <div className="space-x-8 pl-12">
                    {officeSearchPattern.map((column, index) => (
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
                </div>
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
                    subDatas={manipulatedSubData}
                    titleModal={"Edit Office"}
                    loadingSubData={loadingSubData}
                    loadingSearch={loadingSearch}
                />
            </div>
        </div>
    );
};

export default OfficePage;
