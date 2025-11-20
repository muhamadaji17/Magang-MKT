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
import { Tab, Tabs } from "./Tabs";

const Table = ({
  configTable,
  datasTable,
  dataRow,
  stateShowSidebar,
  stateShowModal,
  handleSearch,
  isLoading,
  inputForm,
  submitType,
  tableType,
  handleService,
  title,
  pathDetail,
  handleAPI,
}) => {
  return (
    <div className="overflow-x-scroll 2xl:overflow-x-auto">
      <div className="min-w-fit">
        <div className="mb-3 flex flex-row gap-4 lg:flex-row justify-between w-full">
          <InputTable configTable={configTable} handleSearch={handleSearch} />
        </div>

        <div>
          <table className="w-full rounded-t-md min-w-max">
            <TableHead configTable={configTable} type="table" />
            <TableBody
              datasTable={datasTable}
              configTable={configTable}
              isLoading={isLoading}
              tableType={tableType}
              pathDetail={pathDetail}
              handleShowSidebar={stateShowSidebar?.handleShow}
              handleShowModal={stateShowModal?.handleShow}
              handleAPI={handleAPI}
            />
          </table>
        </div>

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
              : submitType === "synopsis"
              ? "Synopsis Film"
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
            <div className="flex flex-col items-center justify-center">
              <img
                src={`http://${
                  dataRow.poster_film || dataRow.contact_sosmed_logo
                }`}
                className="w-[500px] "
              />
            </div>
          ) : submitType === "synopsis" ? (
            <div className="min-h-[500px]">
              <Tabs defaultTab="id">
                <Tab id="id" label={"Indonesia"}>
                  {dataRow.sinopsis_film_id}
                </Tab>

                <Tab id="en" label={"English"}>
                  {dataRow.sinopsis_film_en}
                </Tab>
              </Tabs>
            </div>
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
