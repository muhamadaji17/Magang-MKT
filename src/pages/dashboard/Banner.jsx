import {
    inputBanner,
    inputEditBanner,
    handleShowModalId,
    saveEvents,
} from "../../pattern";
import { useGlobalHooks, useGetDataHook } from "../../hooks";
import {
    AddBannerService,
    GetBannerService,
    EditBannerService,
    DeleteBannerService,
    EditBannerDateService,
} from "../../services";
import { Calendar } from "../../components/organisms";
import { DashboardTemplate } from "../../components/templates";

const BannerPage = () => {
    const {
        accessToken,
        datas,
        setDatas,
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
        GetBannerService,
        accessToken,
        setDatas,
        setLoadingData,
        reGetDatas,
        setReGetDatas
    );

    return (
        <DashboardTemplate
            addPattern={inputBanner}
            editPattern={inputEditBanner}
            getDetailsData={getDetailsData}
            pageText="Banner Page"
            buttonText="Add Banner"
            titleModal="Add Banner"
            setReGetDatas={setReGetDatas}
            addService={AddBannerService}
            showModal={showModal}
            setShowModal={setShowModal}
            modalType={modalType}
            EditService={EditBannerService}
            DeleteService={DeleteBannerService}
        >
            <Calendar
                datas={datas}
                setDatas={setDatas}
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
                saveEvents={() =>
                    saveEvents(
                        datas,
                        EditBannerDateService,
                        accessToken,
                        setShowModal,
                        setLoadingData,
                        setReGetDatas
                    )
                }
            />
        </DashboardTemplate>
    );
};

export default BannerPage;
