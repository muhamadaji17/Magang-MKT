import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { DeleteModal, DescriptionContent, FormModal } from "../molecules";
import ModalLayout from "./ModalLayout";

const DescriptionAbout = ({
    datas,
    getDetailsData,
    handleCancelModal,
    setReGetDatas,
    modalType,
    setShowModal,
    showModal,
    editService,
    inputEditPattern,
    deleteService,
    handleShowModalId,
    titleModal,
}) => {
    return (
        <>
            {datas.length > 0 ? (
                datas.map((data) => (
                    <div
                        className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-4"
                        key={data.id}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">
                                {data.about_meta}
                            </h2>
                            <div className="flex items-center gap-2">
                                <BsPencilSquare
                                    className="w-6 h-6 text-sky-600 cursor-pointer"
                                    onClick={() =>
                                        handleShowModalId(data, "edit")
                                    }
                                />
                                <RiDeleteBin6Fill
                                    className="w-6 h-6 text-red-600 cursor-pointer"
                                    onClick={() =>
                                        handleShowModalId(data.id, "delete")
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <DescriptionContent
                                title="About (Indonesia Language)"
                                status={data.status}
                                text={data.about_body_id}
                            />
                            <DescriptionContent
                                title="About (English Language)"
                                status={data.status}
                                text={data.about_body_en}
                            />
                        </div>
                    </div>
                ))
            ) : (
                <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
                    <p className="text-gray-500 text-lg">No data available</p>
                </div>
            )}
            {showModal && (
                <ModalLayout setShowModal={setShowModal}>
                    {modalType === "delete" ? (
                        <DeleteModal
                            setShowModal={setShowModal}
                            deleteService={deleteService}
                            id={getDetailsData}
                            handleCancelModal={() =>
                                handleCancelModal(setShowModal)
                            }
                            setReGetDatas={setReGetDatas}
                        />
                    ) : modalType === "edit" ? (
                        <FormModal
                            titleModal={titleModal}
                            setShowModal={setShowModal}
                            dataForm={inputEditPattern(getDetailsData)}
                            service={editService}
                            setReGetDatas={setReGetDatas}
                        />
                    ) : null}
                </ModalLayout>
            )}
        </>
    );
};

export default DescriptionAbout;
