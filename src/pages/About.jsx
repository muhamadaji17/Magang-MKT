import { Container, HeaderContent, ModalLayout } from "@/components";
import { useAbout } from "@/hooks/about/useAbout";
import AboutContent from "@/components/organism/AboutContent";
import {
  deleteAbout,
  postAbout,
  updateAbout,
} from "@/services/about/aboutService";
import FormEditor from "@/components/organism/FormEditor";
import { inputAboutPattern } from "@/pattern";
import { handleSubmit } from "@/pattern/handleSubmit";

const About = () => {
  const {
    about,
    modalIsOpen,
    modalType,
    selectedAbout,
    onOpenEditModal,
    token,
    refresh,
    setRefresh,
    handleCloseModal,
    handleOpenModal,
  } = useAbout();

  const postSubmit = async (data) => {
    handleSubmit(data, postAbout, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const editSubmit = async (data) => {
    const aboutId = selectedAbout.id_about;
    const updatedData = { ...data };

    updateAbout(aboutId, updatedData, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const deleteSubmit = async (aboutId) => {
    deleteAbout(aboutId.id_about, { token, setRefresh, refresh });
  };

  return (
    <>
      <Container>
        <HeaderContent
          titleButton={"Add About"}
          handleOpenModal={() => handleOpenModal("add")}
        />
        {about.map((about, index) => (
          <AboutContent
            key={index}
            meta={about.about_meta}
            bodyId={about.about_body_id}
            bodyEn={about.about_body_en}
            deleteClick={() => deleteSubmit(about)}
            editClick={() => onOpenEditModal(about)}
          />
        ))}
      </Container>
      <ModalLayout isModalOpen={modalIsOpen} onClick={handleCloseModal}>
        <FormEditor
          inputPattern={inputAboutPattern}
          onSubmit={modalType === "add" ? postSubmit : editSubmit}
          handleCloseModal={handleCloseModal}
          defaultValues={modalType === "add" ? {} : selectedAbout}
        />
      </ModalLayout>
    </>
  );
};

export default About;
