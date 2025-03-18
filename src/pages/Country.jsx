import {
  Container,
  FormTemplate,
  HeaderContent,
  ModalLayout,
  Table,
} from "@/components";
import { useCountry } from "@/hooks/country/useCountry";
import { handleSubmit } from "@/pattern/handleSubmit";
import { inputCountryPattern, tableHeadCountryPattern } from "@/pattern";
import {
  deleteCountry,
  postCountry,
  updateCountry,
} from "@/services/country/countryService";

const Country = () => {
  const {
    country,
    modalIsOpen,
    handleCloseModal,
    handleOpenModal,
    handleOpenEditModal,
    selectedCountry,
    modalType,
    token,
    refresh,
    setRefresh,
    searchQuery,
    setSearchQuery,
  } = useCountry();

  const handleInputChange = (key, value) => {
    setSearchQuery((prevQuery) => ({
      ...prevQuery,
      [key]: value,
    }));
  };

  const postSubmit = async (data) => {
    handleSubmit(data, postCountry, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const editSubmit = async (data) => {
    const countryId = selectedCountry.id_country;
    const updatedData = { ...data };

    updateCountry(countryId, updatedData, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const deleteSubmit = async (countryId) => {
    deleteCountry(countryId.id_country, {
      token,
      setRefresh,
      refresh,
    });
  };

  return (
    <>
      <Container>
        <HeaderContent
          handleOpenModal={() => handleOpenModal("add")}
          titleButton={"Add Country"}
        />
        <Table
          handleOpenEditModal={handleOpenEditModal}
          dataTable={country}
          inputValues={searchQuery}
          onChangeValues={handleInputChange}
          label={tableHeadCountryPattern}
          deleteSubmit={deleteSubmit}
          className={"w-full relative  overflow-x-auto"}
        />
      </Container>
      <ModalLayout isModalOpen={modalIsOpen} onClick={handleCloseModal}>
        <FormTemplate
          showCloseButton={true}
          className="w-full"
          title={modalType === "add" ? "Add Country" : "Edit Country"}
          onSubmit={modalType === "add" ? postSubmit : editSubmit}
          description={"Enter Country Details"}
          pattern={inputCountryPattern}
          onClose={handleCloseModal}
          defaultValues={selectedCountry}
        />
      </ModalLayout>
    </>
  );
};

export default Country;
