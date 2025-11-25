import { DELETE, GET, POST, PUT } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateEndpointWithQuery } from "../generateEndpointWithQuery";
import { generateHeaders } from "../generateHeaders";

export const getRolesService = async (accessToken, extraOptions) => {
  const { setDatasRole, setRefreshData, searchQuery } = extraOptions;

  const queryParams = generateEndpointWithQuery(searchQuery);
  try {
    const response = await GET(`crud/roles/by?${queryParams}`, accessToken);
    const gabung = response.data.payload?.map((data) => ({
      ...data,
      label: data.role_name,
      value: data.id_roles,
    }));

    setDatasRole(gabung);
    setRefreshData(true);
  } catch (error) {
    console.error(error);
  }
};

export const addRoleService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;
  const headers = generateHeaders({ accessToken });

  try {
    const response = await POST("crud/roles", datas, headers);

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

export const updateRoleService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;
  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/roles", datas, headers);

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

export const deleteRoleService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  try {
    const response = await DELETE("crud/roles", accessToken, id);

    if (response.data.status) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setRefreshData(false);
    }
  } catch (error) {
    console.error(error);
    SwalAlertBasic({ icon: "error", text: error.response.data.message });
  }
};
