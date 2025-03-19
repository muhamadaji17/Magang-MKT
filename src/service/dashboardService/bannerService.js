import { DELETE, GET, POST, PUT } from "../../api";
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
    console.log(response);
  } catch (error) {
    console.error(error);
    alert(error.response.data.message);
    console.log(error);
  }
};

export const addBannerService = async (datas, extraOptions) => {
  const {
    accessToken,
    handleCloseSidebar,
    setRefreshData,
    reset,
    setFileName,
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
      alert(response.data.message);
      handleCloseSidebar();
      setRefreshData(false);
      reset();
      setFileName("");
      setImagePreview(null);
    }
    console.log(response);
  } catch (error) {
    console.error("Update Failed:", error);
    throw error;
  }
};

export const updateBannerService = async (datas, extraOptions) => {
  const { accessToken, handleCloseSidebar, setRefreshData, setUpdatedEvents } =
    extraOptions;

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
        alert("Update Success");
        setRefreshData(false);
        setUpdatedEvents([]);
      }
      console.log(responses);
    } else {
      const response = await updateBanner({
        ...datas,
        banner_img:
          typeof datas.banner_img === "string"
            ? datas.banner_img
            : datas?.banner_img[0],
      });
      console.log(response);
      if (response.data.status) {
        alert(response.data.message);
        handleCloseSidebar();
        setUpdatedEvents([]);
        setRefreshData(false);
      }
    }
  } catch (error) {
    console.error("Update Failed:", error);
    alert(error.response.data.message);
    throw error;
  }
};

export const deleteBannerService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, handleCloseSidebar } =
    extraOptions;

  try {
    const response = await DELETE("crud/banner", accessToken, id);
    if (response.data.success) {
      alert(response.data.message);
      handleCloseModal();
      handleCloseSidebar();
      setRefreshData(false);
    }
    console.log(response);
  } catch (error) {
    console.error("Delete Failed:", error);
    throw error;
  }
};
