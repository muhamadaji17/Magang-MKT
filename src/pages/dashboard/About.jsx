import { ConfirmDelete, Form, HeaderContent } from "../../components/molecules";
import {
  handleAddAbout,
  handleDeleteAbout,
  handleEditAbout,
} from "../../service";
import { CardLayout, ModalLayout } from "../../components/layouts";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { inputAddAbout, inputEditAbout } from "../../pattern";
import { useAboutHook } from "../../hook";

const About = () => {
  const {
    datasAbout,
    isModalOpen,
    submitType,
    dataRow,
    searchQuery,
    setSearchQuery,
    extraOptions,
    handleOpenModal,
    handleCloseModal,
  } = useAboutHook();

  return (
    <>
      <HeaderContent title={"About"} handleOpen={handleOpenModal} />

      <div className="flex flex-col gap-4">
        {datasAbout.length === 0 ? (
          <p className="text-gray-500 text-center">Tidak ada data.</p>
        ) : (
          datasAbout.map((data, index) => (
            <div key={index}>
              <CardLayout>
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        data.status ? "bg-green-500 " : "bg-red-500"
                      }`}
                    />
                    <h3 className="text-xl font-bold text-gray-700">
                      {data.about_meta}
                    </h3>
                  </div>
                  <div className="inline-flex space-x-2">
                    <FaRegEdit
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal("edit", data);
                      }}
                      className="text-blue-500 text-xl cursor-pointer"
                    />

                    <FaRegTrashAlt
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal("delete", data);
                      }}
                      className="text-red-500 text-xl cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex mt-4 gap-4">
                  {["about_body_en", "about_body_id"].map((lang, langIndex) => (
                    <div
                      className="bg-white flex-1 p-4 border border-gray-300 rounded-md"
                      key={langIndex}
                    >
                      <h5 className="font-semibold mb-4 text-sm">
                        Description{" "}
                        {lang === "about_body_id" ? "(ID)" : "(ENG)"}
                      </h5>

                      <div dangerouslySetInnerHTML={{ __html: data[lang] }} />
                    </div>
                  ))}
                </div>
              </CardLayout>
            </div>
          ))
        )}
      </div>

      <ModalLayout
        isModalOpen={isModalOpen}
        className={`${submitType !== "delete" && "w-[1000px]"}`}
        title={submitType === "add" ? "Add About" : "Edit About"}
        handleCloseModal={handleCloseModal}
        closeButton={submitType !== "delete"}
      >
        {submitType === "delete" ? (
          <ConfirmDelete
            dataRow={{ ...dataRow, title: dataRow.about_meta }}
            handleCloseModal={handleCloseModal}
            onConfirm={handleDeleteAbout(extraOptions, dataRow)}
          />
        ) : (
          <Form
            configInput={
              submitType === "add" ? inputAddAbout : inputEditAbout(dataRow)
            }
            buttonText={"Submit"}
            handleSubmitData={
              submitType === "add"
                ? handleAddAbout(extraOptions)
                : handleEditAbout(extraOptions, dataRow)
            }
          />
        )}
      </ModalLayout>
    </>
  );
};

export default About;
