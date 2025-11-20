/** @format */

import { HeaderContent } from "../../components/molecules";
import { Table } from "../../components/organism";
import { useContactCategoryHook, useContactHook } from "../../hook";
import {
  configTableContact,
  handleSearch,
  inputAddContact,
  inputEditContact,
} from "../../pattern";
import {
  addContactService,
  deleteContactService,
  updateContactService,
} from "../../service";

const ContactPage = () => {
  const {
    dataRow,
    datasContact,
    extraOptions,
    isLoading,
    stateShowModal,
    submitType,
    setSearchQuery,
  } = useContactHook();

  const { datasContactCategory } = useContactCategoryHook();

  return (
    <>
      <HeaderContent
        title={"Master Contact"}
        handleOpen={stateShowModal.handleShow}
      />

      <Table
        datasTable={datasContact}
        dataRow={dataRow}
        configTable={configTableContact}
        stateShowModal={stateShowModal}
        title={" Contact"}
        isLoading={isLoading}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add"
            ? inputAddContact(datasContactCategory)
            : submitType === "edit"
            ? inputEditContact(dataRow, datasContactCategory)
            : null
        }
        submitType={submitType}
        handleService={(data) => {
          submitType === "add"
            ? addContactService(data, extraOptions)
            : submitType === "edit"
            ? updateContactService(data, extraOptions)
            : submitType === "delete"
            ? deleteContactService(dataRow.id_contact, extraOptions)
            : null;
        }}
      />
    </>
  );
};

export default ContactPage;
