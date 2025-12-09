import { DELETE, GET, POST, PUT } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateEndpointWithQuery } from "../generateEndpointWithQuery";
import { generateHeaders } from "../generateHeaders";

export const getRoleMenuService = async (accessToken, extraOptions) => {
  const { setDatasRoleMenu, setRefreshData, searchQuery } = extraOptions;

  const queryParams = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`crud/role_menu/by?${queryParams}`, accessToken);
    setDatasRoleMenu(response.data.payload);
    setRefreshData(true);
  } catch (error) {
    console.error(error);
  }
};

export const addRoleMenuService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;
  const headers = generateHeaders({ accessToken });

  try {
    const response = await POST("crud/role_menu", datas, headers);

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
    console.error(error);
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
  }
};

export const updateRoleMenuService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;
  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/role_menu", datas, headers);

    if (response.data.status === true) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      setRefreshData(false);
      setLoadingButton(false);
      handleCloseModal();
    } else if (response.data.status === false) {
      SwalAlertBasic({
        icon: "error",
        text: response.data.message,
      });
    }
  } catch (error) {
    console.error(error);
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
  }
};

export const deleteRoleMenuService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;

  try {
    const response = await DELETE("crud/role_menu", accessToken, id);
    if (response.data.status || response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setRefreshData(false);
    }
    setLoadingButton(false);
  } catch (error) {
    console.error(error);
    setLoadingButton(false);
  }
};
