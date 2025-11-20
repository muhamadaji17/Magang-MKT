import { HeaderContent } from "../../components/molecules";
import Calendar from "../../components/organism/Calendar";
import { inputAddBanner, inputEditBanner } from "../../pattern";
import { useBannerHook } from "../../hook";
import { handleServiceWithOnClick, handleAddBanner } from "../../service";
import { handleUpdateBanner } from "../../service/handlers/bannerHandlers";

const Banner = () => {
  const {
    dataBanner,
    dataRow,
    submitType,
    stateShowModal,
    stateShowSidebar,
    extraOptions,
  } = useBannerHook();

  return (
    <>
      <HeaderContent
        title={"Banner"}
        handleOpen={stateShowSidebar.handleShow}
      />

      <Calendar
        dataEvents={dataBanner}
        dataEvent={dataRow}
        submitType={submitType}
        inputForm={
          submitType === "add" ? inputAddBanner : inputEditBanner(dataRow)
        }
        stateShowModal={stateShowModal}
        stateShowSidebar={stateShowSidebar}
        handleServiceWithOnClick={handleServiceWithOnClick(extraOptions)}
        handleService={
          submitType === "add"
            ? handleAddBanner(extraOptions)
            : submitType === "edit"
            ? handleUpdateBanner(extraOptions, dataRow)
            : null
        }
      />
    </>
  );
};

export default Banner;
