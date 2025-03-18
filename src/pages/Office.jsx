import {
  Container,
  FormTemplate,
  HeaderContent,
  ModalLayout,
  Spinner,
  Table,
} from "@/components";
import "leaflet/dist/leaflet.css";

import { useOffice } from "@/hooks/office/useOffice";
import { handleSubmit } from "@/pattern/handleSubmit";
import { inputOfficePattern, tableHeadOfficePattern } from "@/pattern";
import {
  deleteOffice,
  postOffice,
  updateOffice,
} from "@/services/office/officeService";
import Leaflet from "@/components/organism/Leaflet";
import { IoCloseCircle } from "react-icons/io5";

const Office = () => {
  const {
    office,
    handleOpenModal,
    cityOptions,
    modalIsOpen,
    modalType,
    handleCloseModal,
    handleOpenEditModal,
    selectedOffice,
    loading,
    token,
    refresh,
    setRefresh,
    searchQuery,
    setSearchQuery,
    selectedCoords,
    handleEyeClick,
  } = useOffice();

  const postSubmit = async (data) => {
    handleSubmit(data, postOffice, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const deleteSubmit = async (officeId) => {
    deleteOffice(officeId.id_office, {
      token,
      setRefresh,
      refresh,
    });
  };

  const editSubmit = async (data) => {
    const officeId = selectedOffice.id_office;
    const updatedData = { ...data };
    updateOffice(officeId, updatedData, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const handleInputChange = (key, value) => {
    setSearchQuery((prevQuery) => ({
      ...prevQuery,
      [key]: value,
    }));
  };

  if (loading)
    return (
      <Container>
        <Spinner />
      </Container>
    );
  return (
    <>
      <Container>
        <HeaderContent
          handleOpenModal={() => handleOpenModal("add")}
          titleButton={"Add Office"}
        />
        <Table
          handleOpenEditModal={handleOpenEditModal}
          dataTable={office}
          inputValues={searchQuery}
          onChangeValues={handleInputChange}
          label={tableHeadOfficePattern}
          deleteSubmit={deleteSubmit}
          handleEyeModal={(row) => handleEyeClick(row)}
          className="relative w-full overflow-x-auto"
        />
      </Container>
      <ModalLayout isModalOpen={modalIsOpen} onClick={handleCloseModal}>
        {modalType === "add" || modalType === "edit" ? (
          <FormTemplate
            showCloseButton={true}
            className="bg-white"
            title={modalType === "add" ? "Add Office" : "Edit Office"}
            onSubmit={modalType === "add" ? postSubmit : editSubmit}
            description={"Enter Country Details"}
            pattern={inputOfficePattern}
            onClose={handleCloseModal}
            officeOptions={cityOptions}
            defaultValues={selectedOffice}
          />
        ) : modalType === "map" ? (
          <div className="w-[900px] flex flex-col h-96 bg-white relative">
            <IoCloseCircle
              onClick={handleCloseModal}
              size={35}
              className="absolute transition-all duration-300 cursor-pointer -top-4 -right-4 text-slate-500 hover:text-red-500"
            />
            <h1 className="p-2">Address: {selectedCoords.address}</h1>
            <Leaflet selectedCoords={selectedCoords} />
          </div>
        ) : null}
      </ModalLayout>
    </>
  );
};

export default Office;
