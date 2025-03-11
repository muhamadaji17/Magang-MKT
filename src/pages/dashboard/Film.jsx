import { Loading } from "../../components/atoms";
import {
    Card,
    Tooltip,
    DashboardHeader,
    FormModal,
} from "../../components/molecules";
import {
    GetFilmService,
    AddFilmService,
    EditFilmService,
    DeleteFilmService,
} from "../../services";
import { useGetDataHook, useGlobalHooks } from "../../hooks";
import { handleShowModalId, inputEditFilms, inputFilms } from "../../pattern";
import { ModalLayout } from "../../components/organisms";

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
                pageText="Films Page"
                buttonText="Add Film"
                dataForm={inputFilms}
                titleModal="Add Film"
                setReGetDatas={setReGetDatas}
                service={AddFilmService}
                setModalType={setModalType}
            />
            <div className="grid grid-cols-5 justify-center gap-4 ">
                {datas.map((item) => (
                    <div
                        className="relative w-80"
                        key={item.id}
                        onClick={() =>
                            handleShowModalId(
                                showModal,
                                setShowModal,
                                setGetDetailsData,
                                item,
                                setModalType,
                                "special"
                            )
                        }
                    >
                        <Card
                            image={item.url_film}
                            name={item.nama_film}
                            synopsis={item.sinopsis_film_id}
                        />
                        <Tooltip logical={item.status} />
                    </div>
                ))}
            </div>
            {showModal && (
                <ModalLayout setShowModal={setShowModal} variant="justify-end">
                    <FormModal
                        titleModal="Edit Film"
                        setShowModal={setShowModal}
                        dataForm={inputEditFilms(getDetailsData)}
                        service={EditFilmService}
                        setReGetDatas={setReGetDatas}
                        variant="w-[800px] h-full rounded-none"
                        modalType={modalType}
                        handleDelete={(data, accessToken, setLoadingButton) =>
                            DeleteFilmService(
                                data,
                                accessToken,
                                setShowModal,
                                setLoadingButton,
                                setReGetDatas
                            )
                        }
                    />
                </ModalLayout>
            )}
        </div>
    );
};

export default FilmPage;
