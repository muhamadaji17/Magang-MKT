import {
  Container,
  FormTemplate,
  HeaderContent,
  ModalLayout,
  Table,
} from "@/components";
import { useFilm } from "@/hooks/film/useFilm";
import { handleSubmit } from "@/pattern/handleSubmit";
import { inputFilmPattern, tableHeadFilmPattern } from "@/pattern";
import { deleteFilm, postFilm, updateFilm } from "@/services/film/filmService";

const Film = () => {
  const {
    film,
    refresh,
    modalIsOpen,
    modalType,
    setRefresh,
    handleCloseModal,
    handleOpenModal,
    handleOpenEditModal,
    selectedFilm,
    token,
    searchQuery,
    setSearchQuery,
  } = useFilm();

  const postSubmit = async (data) => {
    const formData = { ...data, poster_film: data.poster_film[0] };
    handleSubmit(formData, postFilm, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const editSubmit = async (data) => {
    const filmId = selectedFilm.id_film;
    const formData = {
      ...data,
      poster_film:
        typeof data.poster_film === "string"
          ? data.poster_film
          : data.poster_film[0],
    };

    updateFilm(filmId, formData, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const deleteSubmit = async (filmId) => {
    deleteFilm(filmId.id_film, {
      token,
      setRefresh,
      refresh,
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
          titleButton={"Add Film"}
          handleOpenModal={() => handleOpenModal("add")}
        />
        <Table
          handleOpenEditModal={handleOpenEditModal}
          dataTable={film}
          label={tableHeadFilmPattern}
          deleteSubmit={deleteSubmit}
          inputValues={searchQuery}
          onChangeValues={handleInputChange}
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
          pattern={inputFilmPattern}
          onClose={handleCloseModal}
          defaultValues={selectedFilm}
        />
      </ModalLayout>
    </>
  );
};

export default Film;
