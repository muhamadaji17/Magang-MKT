import {
  Container,
  FormTemplate,
  HeaderContent,
  ModalLayout,
  Spinner,
  Table,
} from "@/components";
import { useOffice } from "@/hooks/office/useOffice";
import { handleSubmit } from "@/pattern/handleSubmit";
import { inputOfficePattern, tableHeadOfficePattern } from "@/pattern";
import {
  deleteOffice,
  postOffice,
  updateOffice,
} from "@/services/office/officeService";

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Table
          handleOpenEditModal={handleOpenEditModal}
          dataTable={office}
          label={tableHeadOfficePattern}
          deleteSubmit={deleteSubmit}
          className="w-full overflow-x-auto relative"
        />
      </Container>
      <ModalLayout isModalOpen={modalIsOpen} onClick={handleCloseModal}>
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
      </ModalLayout>
    </>
  );
};

export default Office;
