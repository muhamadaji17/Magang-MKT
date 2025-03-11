import {
  Container,
  FormTemplate,
  HeaderContent,
  ModalLayout,
} from "@/components";
import { useFilm } from "@/hooks/film/useFilm";
import { inputPostFilm } from "@/pattern/table/tablePattern";
import { useState } from "react";
import { FaCircle } from "react-icons/fa6";

const Film = () => {
  const {
    film,
    modalIsOpen,
    modalType,
    handleOpenModal,
    handleCloseModal,
    handleOpenEditModal,
    postSubmit,
    selectedFilm,
  } = useFilm();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <Container>
        <HeaderContent
          handleOpenModal={() => handleOpenModal("add")}
          titleButton={"Add Film"}
        />
        <div className="grid w-full grid-cols-5 gap-3">
          {film.map((film, index) => (
            <div
              className="relative "
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute -top-2 -right-2"
                title={film.status === true ? "Active" : "Inactive"}
              >
                <FaCircle
                  size={25}
                  className={`${
                    film.status === true ? "text-green-600" : "text-red-600"
                  }`}
                />
              </div>
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/image/films/${
                  film.poster_film
                }`}
                alt="test"
                className="object-cover w-full"
              />
              {hoveredIndex === index && (
                <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-xl top-15">
                  <ul className="flex flex-col gap-2">
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleOpenEditModal(film)}
                    >
                      edit
                    </li>
                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                      delete
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
      <ModalLayout isModalOpen={modalIsOpen}>
        <FormTemplate
          showCloseButton={true}
          onClose={handleCloseModal}
          onSubmit={modalType === "add" ? postSubmit : null}
          title={modalType === "add" ? "Add Film" : "Edit Film"}
          description={
            modalType === "add?"
              ? "Insert film detail to add data"
              : "Enter film detail to edit data"
          }
          className="w-1/2 bg-white"
          pattern={inputPostFilm}
          defaultValues={modalType === "edit" && selectedFilm}
        />
      </ModalLayout>
    </>
  );
};

export default Film;
