/** @format */

import { ModalLayout } from "../layouts";
import {
  ConfirmDelete,
  Form,
  InputTable,
  Leaflet,
  Sidebar,
  TableBody,
  TableHead,
} from "../molecules";

const Table = ({
  configTable,
  datasTable,
  dataRow,
  stateShowSidebar,
  stateShowModal,
  handleSearch,
  inputForm,
  submitType,
  tableType,
  handleService,
  title,
  handleAPI,
}) => {
  return (
    <div>
      <div className="mb-3 flex flex-col gap-4 lg:flex-row justify-between">
        <InputTable configTable={configTable} handleSearch={handleSearch} />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full rounded-t-md overflow-hidden">
          <TableHead configTable={configTable} type={"table"} />
          <TableBody
            datasTable={datasTable}
            configTable={configTable}
            tableType={tableType}
            handleShowSidebar={stateShowSidebar?.handleShow}
            handleShowModal={stateShowModal?.handleShow}
            handleAPI={handleAPI}
          />
        </table>

        {/* {tableType === "films" && (
          <Sidebar
            isShow={stateShowSidebar?.isShow}
            type="form"
            slide
            position={"right-0"}
            submitType={submitType}
            dataDefault={dataRow}
            title={submitType === "add" ? "Add Film" : "Update Film"}
            inputForm={inputForm}
            handleShow={stateShowSidebar?.handleShow}
            handleService={handleService}
          />
        )} */}

        <ModalLayout
          isModalOpen={stateShowModal?.isShow}
          handleCloseModal={stateShowModal?.handleShow}
          submitType={submitType}
          description={submitType === "location" ? dataRow.address : null}
          title={
            submitType === "add"
              ? `Create ${title}`
              : submitType === "location"
              ? "Location"
              : submitType === "edit"
              ? `Update ${title}`
              : null
          }
          closeButton={submitType !== "delete"}
        >
          {submitType == "add" || submitType === "edit" ? (
            <Form
              configInput={inputForm}
              buttonText={"Submit"}
              handleSubmitData={handleService}
            />
          ) : submitType === "location" ? (
            <Leaflet
              latitude={dataRow.latitude}
              longitude={dataRow.longitude}
            />
          ) : submitType === "image" ? (
            <>
              <img
                src={`${import.meta.env.VITE_API_PUBLIC_IMG}films/${
                  dataRow.poster_film
                }`}
              />
            </>
          ) : submitType === "delete" ? (
            <ConfirmDelete
              handleCloseModal={stateShowModal?.handleShow}
              dataRow={dataRow}
              onConfirm={handleService}
            />
          ) : null}
        </ModalLayout>
      </div>
    </div>
  );
};

export default Table;
