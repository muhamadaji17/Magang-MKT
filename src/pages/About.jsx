import { Container, HeaderContent, Input, ModalLayout } from "@/components";
import { useAbout } from "@/hooks/about/useAbout";
import AboutContent from "@/components/organism/AboutContent";
import InputEditor from "@/components/layout/InputEditor";
import { useForm } from "react-hook-form";

const About = () => {
  const { about, modalIsOpen, modalType, handleCloseModal, handleOpenModal } =
    useAbout();
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    console.log("Form data:", data);
    handleCloseModal();
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full bg-white flex flex-col gap-4 p-4 rounded-sm  overflow-x-auto md:max-w-4xl"
        >
          <Input
            label="Meta"
            placeholder="Insert meta"
            className="rounded-none w-full"
            {...register("about_meta")}
          />
          <div className="w-full flex flex-col md:flex-row gap-4">
            <InputEditor {...register("about_body_id")} setValue={setValue} />
            <InputEditor {...register("about_body_en")} setValue={setValue} />
          </div>
          <button className="w-full bg-blue-800 p-2 rounded-sm text-white">
            Save
          </button>
        </form>
      </ModalLayout>
    </>
  );
};

export default About;
