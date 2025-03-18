import {
  Container,
  FormTemplate,
  HeaderContent,
  ModalLayout,
  Table,
} from "@/components";
import { useProvince } from "@/hooks/province/useProvince";
import { handleSubmit } from "@/pattern/handleSubmit";
import { inputProvincePattern, tableHeadProvincePattern } from "@/pattern";
import {
  deleteProvince,
  postProvince,
  updateProvince,
} from "@/services/province/provinceService";

const Province = () => {
  const {
    province,
    handleOpenModal,
    handleOpenEditModal,
    modalIsOpen,
    handleCloseModal,
    modalType,
    token,
    refresh,
    setRefresh,
    countryOptions,
    selectedProvince,
    searchQuery,
    setSearchQuery,
  } = useProvince();

  const postSubmit = async (data) => {
    handleSubmit(data, postProvince, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const deleteSubmit = async (provinceId) => {
    deleteProvince(provinceId.id_province, {
      token,
      setRefresh,
      refresh,
    });
  };

  const editSubmit = async (data) => {
    const provinceId = selectedProvince.id_province;
    const updatedData = { ...data };
    updateProvince(provinceId, updatedData, {
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

  return (
    <>
      <Container>
        <HeaderContent
          handleOpenModal={() => handleOpenModal("add")}
          titleButton={"Add Province"}
        />
        <Table
          handleOpenEditModal={handleOpenEditModal}
          dataTable={province}
          label={tableHeadProvincePattern}
          onChangeValues={handleInputChange}
          inputValues={searchQuery}
          deleteSubmit={deleteSubmit}
          className="w-full overflow-x-auto relative"
        />
      </Container>
      <ModalLayout isModalOpen={modalIsOpen} onClick={handleCloseModal}>
        <FormTemplate
          showCloseButton={true}
          className="bg-white w-1/3"
          title={modalType === "add" ? "Add Province" : "Edit Province"}
          onSubmit={modalType === "add" ? postSubmit : editSubmit}
          description={
            modalType === "add"
              ? "Enter Country Details"
              : "Edit Country Details"
          }
          pattern={inputProvincePattern}
          onClose={handleCloseModal}
          overrideOptions={countryOptions}
          defaultValues={selectedProvince}
        />
      </ModalLayout>
    </>
  );
};

export default Province;
