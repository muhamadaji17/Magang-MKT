import { Container, HeaderContent, ModalLayout } from "@/components";
import { useAbout } from "@/hooks/about/useAbout";
import AboutContent from "@/components/organism/AboutContent";
import { postAbout } from "@/services/about/aboutService";
import FormEditor from "@/components/organism/FormEditor";
import { inputAboutPattern } from "@/pattern/table/tablePattern";
import { handleSubmit } from "@/pattern/handleSubmit";

const About = () => {
  const {
    about,
    modalIsOpen,
    modalType,
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
          />
        ))}
      </Container>
      <ModalLayout isModalOpen={modalIsOpen} onClick={handleCloseModal}>
        <FormEditor inputPattern={inputAboutPattern} onSubmit={postSubmit} />
      </ModalLayout>
    </>
  );
};

export default About;
