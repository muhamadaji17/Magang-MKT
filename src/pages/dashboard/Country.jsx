import { DashboardHeader, Loading } from "../../components/molecules";
import { Table } from "../../components/organisms";
import {
    countryTablePattern,
    handleCancelModal,
    handleShowModalId,
    inputCountry,
    inputEditCountry,
} from "../../pattern";
import { useGetDataHook, useGlobalHooks } from "../../hooks";
import {
    AddCountryService,
    DeleteCountryService,
    EditCountryService,
    GetCountryService,
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
    } = useGlobalHooks();

    useGetDataHook(
        GetCountryService,
        accessToken,
        setDatas,
        setLoadingData,
        reGetDatas,
        setReGetDatas
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
            />
        </div>
    );
};

export default CountryPage;
