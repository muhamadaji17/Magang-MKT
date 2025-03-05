import { DashboardHeader } from "../../components/molecules";
import { inputBanner, inputEditBanner, handleShowModalId } from "../../pattern";
import { useGlobalHooks, useGetDataHook } from "../../hooks";
import {
    AddBannerService,
    GetBannerService,
    EditBannerService,
} from "../../services";
import { Calendar, ModalLayout } from "../../components/organisms";

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
                titleModal={"Add Banner"}
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
            />
            {showModal && (
                <ModalLayout
                    setShowModal={setShowModal}
                    addService={EditBannerService}
                    dataForm={inputEditBanner(getDetailsData)}
                    titleModal={"Edit Banner"}
                    type={modalType}
                    setReGetDatas={setReGetDatas}
                />
            )}
        </div>
    );
};

export default BannerPage;
