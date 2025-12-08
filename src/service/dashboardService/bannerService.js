import { DELETE, GET, POST, PUT } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateHeaders } from "../generateHeaders";

export const getBannerService = async (accessToken, extraOptions) => {
  const { setDataBanner, setRefreshData } = extraOptions;
  try {
    const response = await GET("crud/banner", accessToken);
    const parsing = response.data.payload.map((data) => ({
      id: data.id_banner,
      startDate: data.start_date_banner,
      endDate: data.end_date_banner,
      title: data.banner_name,
      img: data.banner_img,
      status: data.status,
    }));

    setDataBanner(parsing);
    setRefreshData(true);
  } catch (error) {
    SwalAlertBasic({ icon: "error", text: error.response.data.message });
    console.log(error);
  }
};

export const addBannerService = async (datas, extraOptions) => {
  const {
    accessToken,
    handleCloseSidebar,
    setRefreshData,
    reset,
    setLoadingButton,
    setImagePreview,
  } = extraOptions;

  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });

  try {
    const response = await POST(
      "crud/banner",
      { ...datas, banner_img: datas.banner_img[0] },
      headers
    );

    if (response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseSidebar();
      setRefreshData(false);
      reset();
      setLoadingButton(false);
      setImagePreview([]);
    } else {
      SwalAlertBasic({
        icon: "error",
        text: response.data.message,
      });
    }
  } catch (error) {
    console.error("Update Failed:", error);
    SwalAlertBasic({ icon: "error", text: error.response.data.message });
    setLoadingButton(false);
    throw error;
  }
};

export const updateBannerService = async (datas, extraOptions) => {
  const {
    accessToken,
    handleCloseSidebar,
    setRefreshData,
    setUpdatedEvents,
    setLoadingButton,
  } = extraOptions;

  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data,",
  });

  const updateBanner = async (datas) => {
    return await PUT(`crud/banner`, datas, headers);
  };

  try {
    if (Array.isArray(datas)) {
      const updatePromises = datas.map((event) => {
        return updateBanner({
          ...event,
          start_date_banner: event.startDate,
          end_date_banner: event.endDate,
        });
      });

      const responses = await Promise.all(updatePromises);
      const allSuccess = responses.every((response) => response.data.status);

      if (allSuccess) {
        SwalAlertBasic({
          icon: "success",
          text: responses[0].data.message,
        });
        setRefreshData(false);
        setUpdatedEvents([]);
      }
    } else {
      const response = await updateBanner({
        ...datas,
        banner_img:
          typeof datas.banner_img === "string"
            ? datas.banner_img
            : datas?.banner_img[0],
      });

      if (response.data.status) {
        SwalAlertBasic({
          icon: "success",
          text: response.data.message,
        });
        handleCloseSidebar();
        setUpdatedEvents([]);
        setLoadingButton(false);
        setRefreshData(false);
      }
    }
  } catch (error) {
    console.error("Update Failed:", error);
    setLoadingButton(false);
    SwalAlertBasic({
      title: "Error",
      icon: "error",
      text: error.response.data.message,
    });
    throw error;
  }
};

export const deleteBannerService = async (id, extraOptions) => {
  const {
    accessToken,
    setRefreshData,
    handleCloseModal,
    handleCloseSidebar,
    setLoadingButton,
  } = extraOptions;

  try {
    const response = await DELETE("crud/banner", accessToken, id);
    if (response.data.status) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      handleCloseSidebar();
      setRefreshData(false);
    }
    setLoadingButton(false);
  } catch (error) {
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
    console.error("Delete Failed:", error);
    throw error;
  }
};
