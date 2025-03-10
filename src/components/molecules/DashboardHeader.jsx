import { Button } from "../../components/atoms";
import { Breadcrumb, FormModal } from "../molecules";
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
    setModalType,
}) => {
    const { location, showModal, setShowModal } = useGlobalHooks();
    const url = getUrlDashboard(location);

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex lg:items-center flex-col lg:flex-row lg:gap-4 mt-4 lg:mt-0">
                    <h1 className="text-xl lg:text-2xl font-semibold">
                        {pageText}
                    </h1>
                    <Breadcrumb items={url} />
                </div>
                <div>
                    <Button
                        type="button"
                        className="w-24 lg:w-48 text-white bg-blue-600 hover:bg-blue-800 text-sm lg:text-base"
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
                    titleModal={titleModal}
                >
                    <FormModal
                        titleModal="Add Banner"
                        setShowModal={setShowModal}
                        dataForm={dataForm}
                        service={service}
                        setReGetDatas={setReGetDatas}
                    />
                </ModalLayout>
            )}
        </>
    );
};

export default DashboardHeader;
