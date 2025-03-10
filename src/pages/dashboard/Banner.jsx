import {
    inputBanner,
    inputEditBanner,
    handleShowModalId,
    saveEvents,
    handleCancelModal,
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
import {
    DashboardHeader,
    DeleteModal,
    FormModal,
} from "../../components/molecules";

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
        <div className="w-full space-y-2">
            <DashboardHeader
                pageText="Banner Page"
                buttonText="Add Banner"
                dataForm={inputBanner}
                titleModal="Add Banner"
                setReGetDatas={setReGetDatas}
                service={AddBannerService}
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
                <ModalLayout
                    setShowModal={setShowModal}
                    addService={
                        modalType === "edit"
                            ? EditBannerService
                            : modalType === "delete"
                            ? DeleteBannerService
                            : null
                    }
                    dataForm={inputEditBanner(getDetailsData)}
                    titleModal={"Edit Banner"}
                    type={modalType}
                    getDetailsData={getDetailsData}
                    setReGetDatas={setReGetDatas}
                >
                    {modalType === "delete" ? (
                        <DeleteModal
                            setShowModal={setShowModal}
                            deleteService={DeleteBannerService}
                            id={getDetailsData}
                            handleCancelModal={() =>
                                handleCancelModal(setShowModal)
                            }
                            setReGetDatas={setReGetDatas}
                        />
                    ) : modalType === "edit" ? (
                        <FormModal
                            titleModal="Edit Banner"
                            setShowModal={setShowModal}
                            dataForm={inputEditBanner(getDetailsData)}
                            service={EditBannerService}
                            setReGetDatas={setReGetDatas}
                        />
                    ) : null}
                </ModalLayout>
            )}
        </div>
    );
};

export default BannerPage;
