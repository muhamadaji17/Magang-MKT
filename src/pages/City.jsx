import {
  Container,
  FormTemplate,
  HeaderContent,
  ModalLayout,
  Table,
} from "@/components";
import { useCity } from "@/hooks/city/useCity";
import { handleSubmit } from "@/pattern/handleSubmit";
import { tableHeadCityPattern, inputCityPattern } from "@/pattern";
import { deleteCity, postCity, updateCity } from "@/services/city/cityService";

const City = () => {
  const {
    city,
    provinceOptions,
    modalIsOpen,
    handleOpenModal,
    handleCloseModal,
    handleOpenEditModal,
    token,
    refresh,
    setRefresh,
    modalType,
    selectedCity,
    searchQuery,
    setSearchQuery,
  } = useCity();

  const postSubmit = async (data) => {
    handleSubmit(data, postCity, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const editSubmit = async (data) => {
    const cityId = selectedCity.id_city;
    const updatedData = { ...data };
    updateCity(cityId, updatedData, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const deleteSubmit = async (cityId) => {
    deleteCity(cityId.id_city, {
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
          titleButton={"Add City"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Table
          handleOpenEditModal={handleOpenEditModal}
          dataTable={city}
          label={tableHeadCityPattern}
          deleteSubmit={deleteSubmit}
          className={"w-full overflow-x-auto relative"}
        />
      </Container>
      <ModalLayout isModalOpen={modalIsOpen} onClick={handleCloseModal}>
        <FormTemplate
          showCloseButton={true}
          className="bg-white"
          title={modalType === "add" ? "Add City" : "Edit City"}
          onSubmit={modalType === "add" ? postSubmit : editSubmit}
          description={
            modalType === "add" ? "Enter City Details" : "Edit City Details"
          }
          pattern={inputCityPattern}
          onClose={handleCloseModal}
          provinceOptions={provinceOptions}
          defaultValues={selectedCity}
        />
      </ModalLayout>
    </>
  );
};

export default City;
