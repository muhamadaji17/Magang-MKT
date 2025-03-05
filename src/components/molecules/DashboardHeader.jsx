import { Button } from "../../components/atoms";
import { Breadcrumb } from "../molecules";
import { getUrlDashboard } from "../../utils";
import { useGlobalHooks } from "../../hooks";
import ModalLayout from "../organisms/ModalLayout";
import { handleShowModal } from "../../pattern";

const DashboardHeader = ({
    pageText,
    buttonText,
    dataForm,
    titleModal,
    setReGetDatas,
    service,
}) => {
    const { location, modalType, setModalType, showModal, setShowModal } =
        useGlobalHooks();
    const url = getUrlDashboard(location);

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-semibold">{pageText}</h1>
                    <Breadcrumb items={url} />
                </div>
                <div>
                    <Button
                        type="button"
                        className="w-48 text-white bg-blue-600 hover:bg-blue-800 text-sm lg:text-base"
                        disable={false}
                        onClick={() =>
                            handleShowModal(setShowModal, setModalType, "add")
                        }
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
            {showModal && (
                <ModalLayout
                    setShowModal={setShowModal}
                    addService={service}
                    dataForm={dataForm}
                    titleModal={titleModal}
                    type={modalType}
                    setReGetDatas={setReGetDatas}
                />
            )}
        </>
    );
};

export default DashboardHeader;
