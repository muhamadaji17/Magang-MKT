import { Loading } from "../../components/atoms";
import { DashboardHeader } from "../../components/molecules";
import { Table } from "../../components/organisms";
import {
    filmTablePattern,
    handleCancelModal,
    handleShowModalId,
    inputFilm,
    inputEditFilm,
} from "../../pattern";
import { useGetDataHook, useGlobalHooks } from "../../hooks";
import {
    AddFilmService,
    DeleteFilmService,
    EditFilmService,
    GetFilmService,
} from "../../services";

const FilmPage = () => {
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
        GetFilmService,
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
                pageText="Film Page"
                buttonText="Add Film"
                dataForm={inputFilm}
                titleModal="Add Film"
                setReGetDatas={setReGetDatas}
                service={AddFilmService}
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
                columns={filmTablePattern}
                modalType={modalType}
                setShowModal={setShowModal}
                showModal={showModal}
                editService={EditFilmService}
                inputEditPattern={inputEditFilm}
                deleteService={DeleteFilmService}
                titleModal="Edit Film"
                imageFor="films"
            />
        </div>
    );
};

export default FilmPage;
