import { DELETE, GET, POST, PUT } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateEndpointWithQuery } from "../generateEndpointWithQuery";
import { generateHeaders } from "../generateHeaders";

export const getUserService = async (accessToken, extraOptions) => {
  const { setDatasUser, setRefreshData, searchQuery } = extraOptions;
  const queryParams = generateEndpointWithQuery(searchQuery);
  try {
    const response = await GET(`crud/admin/by?${queryParams}`, accessToken);

    setDatasUser(response.data.payload);
    setRefreshData(true);
  } catch (error) {
    console.error(error);
  }
};

export const addUserService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;
  const headers = generateHeaders({ accessToken });

  try {
    const response = await POST("crud/admin", datas, headers);

    if (response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      setRefreshData(false);
      setLoadingButton(false);
      handleCloseModal();
    }
  } catch (error) {
    console.error(error.response.data.message);
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
  }
};

export const updateUserService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;
  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/admin", datas, headers);

    SwalAlertBasic({
      icon: "success",
      text: response.data.message,
    });
    setRefreshData(false);
    handleCloseModal();
    setLoadingButton(false);
  } catch (error) {
    console.error(error);
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
  }
};

export const deleteUserService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  try {
    const response = await DELETE("crud/admin", accessToken, id);
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
