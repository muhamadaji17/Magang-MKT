import { Input, Loading } from "../../components/atoms";
import { DashboardHeader } from "../../components/molecules";
import { Table } from "../../components/organisms";
import {
    filmTablePattern,
    handleCancelModal,
    handleShowModalId,
    inputFilm,
    inputEditFilm,
    handleChange,
} from "../../pattern";
import { useGetDataWithSearchHook, useGlobalHooks } from "../../hooks";
import {
    AddFilmService,
    DeleteFilmService,
    EditFilmService,
    GetFilmService,
    SearchFilmServices,
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
        GetFilmService,
        SearchFilmServices
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
            <div className="space-x-2 space-y-1">
                {filmTablePattern
                    .filter((pattern) => pattern.key !== "url_film")
                    .map((column, index) => (
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
                    loadingSearch={loadingSearch}
                />
            </div>
        </div>
    );
};

export default FilmPage;
