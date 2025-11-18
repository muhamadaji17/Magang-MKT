import HeaderContent from "../../components/molecules/HeaderContent";
import { useRating } from "../../hook";
import { Table } from "../../components/organism";
import {
  configTableRating,
  handleSearch,
  inputAddRating,
  inputEditRating,
} from "../../pattern";
import {
  handleAddRating,
  handleDeleteRating,
  handleEditRating,
} from "../../service";

const Rating = () => {
  const {
    accessToken,
    isLoading,
    dataRow,
    stateShowModal,
    submitType,
    datasRating,
    extraOptions,
    setSearchQuery,
  } = useRating();

  return (
    <>
      <HeaderContent title={"Rating"} handleOpen={stateShowModal.handleShow} />

      <Table
        configTable={configTableRating}
        dataRow={dataRow}
        datasTable={datasRating}
        stateShowModal={stateShowModal}
        submitType={submitType}
        isLoading={isLoading}
        handleSearch={handleSearch(setSearchQuery)}
        inputForm={
          submitType === "add" ? inputAddRating : inputEditRating(dataRow)
        }
        title={"Rating"}
        handleService={
          submitType === "add"
            ? handleAddRating(extraOptions)
            : submitType === "edit"
            ? handleEditRating(extraOptions, dataRow)
            : submitType === "delete"
            ? handleDeleteRating(extraOptions)
            : null
        }
      />
    </>
  );
};

export default Rating;
