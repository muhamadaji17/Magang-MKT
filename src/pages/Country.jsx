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

  // const handleSearch = async () => {
  //   if (!searchQuery) return; // Pastikan input tidak kosong
  //   try {
  //     // Panggil getCountryById dengan id, token, dan setCountry
  //     await getCountryById(searchQuery, { token, setCountry });
  //   } catch (error) {
  //     console.error("Error during search:", error);
  //   }
  // };

  return (
    <>
      <Container>
        <HeaderContent
          handleOpenModal={() => handleOpenModal("add")}
          titleButton={"Add Country"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Table
          handleOpenEditModal={handleOpenEditModal}
          dataTable={country}
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
