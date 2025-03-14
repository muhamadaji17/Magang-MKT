import { useGetDataHook, useGlobalHooks } from "../../hooks";
import {
    DeleteAboutService,
    EditAboutService,
    GetAboutService,
} from "../../services";
import { DashboardHeader } from "../../components/molecules";
import {
    handleCancelModal,
    handleShowModalId,
    inputAbout,
    inputEditAbout,
} from "../../pattern";
import { AddAboutService } from "../../services";
import { DescriptionAbout } from "../../components/organisms";

const AboutPage = () => {
    const {
        accessToken,
        datas,
        setDatas,
        reGetDatas,
        setReGetDatas,
        setLoadingData,
        setModalType,
        showModal,
        setShowModal,
        modalType,
        getDetailsData,
        setGetDetailsData,
    } = useGlobalHooks();

    useGetDataHook(
        GetAboutService,
        accessToken,
        setDatas,
        setLoadingData,
        reGetDatas,
        setReGetDatas
    );

    return (
        <div className="w-full space-y-2">
            <DashboardHeader
                pageText="About Page"
                buttonText="Add About"
                dataForm={inputAbout}
                titleModal="Add About"
                setReGetDatas={setReGetDatas}
                service={AddAboutService}
                setModalType={setModalType}
            />
            <DescriptionAbout
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
                modalType={modalType}
                setShowModal={setShowModal}
                showModal={showModal}
                editService={EditAboutService}
                inputEditPattern={inputEditAbout}
                deleteService={DeleteAboutService}
                titleModal="Edit About"
            />
        </div>
    );
};

export default AboutPage;
