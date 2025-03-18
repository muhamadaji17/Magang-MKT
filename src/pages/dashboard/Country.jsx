import { Input, Loading } from "../../components/atoms";
import { DashboardHeader } from "../../components/molecules";
import { Table } from "../../components/organisms";
import {
    countrySearchPattern,
    countryTablePattern,
    handleCancelModal,
    handleChange,
    handleShowModalId,
    inputCountry,
    inputEditCountry,
} from "../../pattern";
import { useGetDataWithSearchHook, useGlobalHooks } from "../../hooks";
import {
    AddCountryService,
    DeleteCountryService,
    EditCountryService,
    GetCountryService,
    SearchCountryServices,
} from "../../services";

const CountryPage = () => {
    const {
        accessToken,
        datas,
        setDatas,
        loadingData,
        setLoadingData,
        reGetDatas,
        setReGetDatas,
        showModal,
        setShowModal,
        modalType,
        setModalType,
        getDetailsData,
        setGetDetailsData,
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
        GetCountryService,
        SearchCountryServices
    );

    if (loadingData) return <Loading />;

    return (
        <div className="w-full space-y-4">
            <DashboardHeader
                pageText="Country Page"
                buttonText="Add Country"
                dataForm={inputCountry}
                titleModal="Add Country"
                setReGetDatas={setReGetDatas}
                service={AddCountryService}
                setModalType={setModalType}
            />
            <div className="space-y-1">
                <div className="space-x-8 pl-12">
                    {countrySearchPattern.map((column, index) => (
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
                    columns={countryTablePattern}
                    modalType={modalType}
                    setShowModal={setShowModal}
                    showModal={showModal}
                    editService={EditCountryService}
                    inputEditPattern={inputEditCountry}
                    deleteService={DeleteCountryService}
                    titleModal="Edit Country"
                    loadingSearch={loadingSearch}
                />
            </div>
        </div>
    );
};

export default CountryPage;
