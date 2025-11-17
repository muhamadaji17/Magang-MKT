import { DELETE, GET, POST, PUT } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateHeaders } from "../generateHeaders";

export const getAboutService = async (accessToken, extraOptions) => {
  const { setDatasAbout, setRefreshData } = extraOptions;
  try {
    const response = await GET("crud/about", accessToken);

    setDatasAbout(response.data.payload);
    setRefreshData(true);
  } catch (error) {
    console.error(error);
  }
};

export const addAboutService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({
    accessToken,
  });
  try {
    const response = await POST("crud/about", datas, headers);
    if (response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      setRefreshData(false);
      handleCloseModal();
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateAboutService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({
    accessToken,
  });
  try {
    const response = await PUT("crud/about", datas, headers);
    if (response.data.status) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      setRefreshData(false);
      handleCloseModal();
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteAboutService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  try {
    const response = await DELETE("crud/about", accessToken, id);
    if (response.data.status) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setRefreshData(false);
    }
  } catch (error) {
    console.error("Delete Failed:", error);
    throw error;
  }
};

// export const UpdateAboutService = async (datas, extraOptions) => {
//   const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
//   const headers = generateHeaders({
//     accessToken,
//   });
//   try {
//     const response = await PUT("crud/about", datas, headers);

//     if (response.data.success) {
//       SwalAlertBasic({
//         icon: "success",
//         text: response.data.message,
//       });
//       setRefreshData(false);
//       handleCloseModal();
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
