import { DashboardHeader } from "../molecules";
import { ModalLayout } from "../organisms";

const DashboardTemplate = ({
    children,
    addPattern,
    editPattern,
    getDetailsData,
    pageText,
    buttonText,
    titleModal,
    setReGetDatas,
    addService,
    showModal,
    setShowModal,
    modalType,
    EditService,
    DeleteService,
}) => {
    return (
        <div className="w-full space-y-2">
            <DashboardHeader
                pageText={pageText}
                buttonText={buttonText}
                dataForm={addPattern}
                titleModal={titleModal}
                setReGetDatas={setReGetDatas}
                service={addService}
            />
            {children}
            {showModal && (
                <ModalLayout
                    setShowModal={setShowModal}
                    addService={
                        modalType === "edit" ? EditService : DeleteService
                    }
                    dataForm={editPattern(getDetailsData)}
                    titleModal={"Edit Banner"}
                    type={modalType}
                    getDetailsData={getDetailsData}
                    setReGetDatas={setReGetDatas}
                />
            )}
        </div>
    );
};

export default DashboardTemplate;
