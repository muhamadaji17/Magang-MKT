/** @format */

import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useContactCategoryHook } from "../../hook";
import {
  configTableCategoryContact,
  handleSearch,
  inputAddContactCategory,
  inputEditContactCategory,
} from "../../pattern";
import {
  addCategoryContactService,
  deleteCategoryContactService,
  handleAddContactCategory,
  handleDeleteContactCategory,
  handleEditContactCategory,
  updateCategoryContactService,
} from "../../service";

const ContactCategoryPage = () => {
  const {
    dataRow,
    datasContactCategory,
    extraOptions,
    isLoading,
    stateShowModal,
    submitType,
    setSearchQuery,
  } = useContactCategoryHook();

  return (
    <>
      <HeaderContent
        title={"Category Contact"}
        handleOpen={stateShowModal.handleShow}
      />

      <Table
        datasTable={datasContactCategory}
        dataRow={dataRow}
        configTable={configTableCategoryContact}
        stateShowModal={stateShowModal}
        title={"Category Contact"}
        isLoading={isLoading}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add"
            ? inputAddContactCategory
            : submitType === "edit"
            ? inputEditContactCategory(dataRow)
            : null
        }
        submitType={submitType}
        handleService={
          submitType === "add"
            ? handleAddContactCategory(extraOptions)
            : submitType === "edit"
            ? handleEditContactCategory(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteContactCategory(extraOptions, dataRow)
            : null
        }
      />
    </>
  );
};

export default ContactCategoryPage;
