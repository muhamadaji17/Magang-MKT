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
import { Calendar, ModalLayout } from "../../components/organisms";
import { DashboardHeader, FormModal } from "../../components/molecules";
import { Loading } from "../../components/atoms";

const BannerPage = () => {
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
        GetBannerService,
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
                pageText="Banner Page"
                buttonText="Add Banner"
                dataForm={inputBanner}
                titleModal="Add Banner"
                setReGetDatas={setReGetDatas}
                service={AddBannerService}
                setModalType={setModalType}
            />
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
            {showModal && (
                <ModalLayout setShowModal={setShowModal} variant="justify-end">
                    <FormModal
                        titleModal="Edit Film"
                        setShowModal={setShowModal}
                        dataForm={inputEditBanner(getDetailsData)}
                        service={EditBannerService}
                        setReGetDatas={setReGetDatas}
                        variant="w-[800px] h-full rounded-none"
                        modalType={modalType}
                        handleDelete={(data, accessToken, setLoadingButton) =>
                            DeleteBannerService(
                                data,
                                accessToken,
                                setShowModal,
                                setLoadingButton,
                                setReGetDatas
                            )
                        }
                        imageFor="banner"
                    />
                </ModalLayout>
            )}
        </div>
    );
};

export default BannerPage;
