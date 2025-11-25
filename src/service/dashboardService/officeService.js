import { DELETE, GET, POST, PUT } from "../../api";
import { generateHeaders, generateEndpointWithQuery } from "../";
import { SwalAlertBasic } from "../../utils";

export const getOfficeService = async (accessToken, extraOptions) => {
  const { setDatasOffice, setRefreshData, searchQuery } = extraOptions;

  const paramsQuery = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`crud/office/by?${paramsQuery}`, accessToken);
    const parsing = response.data.payload.map((data) => ({
      id: data.id_office,
      office_name: data.office_name,
      id_city: data.id_city,
      city_name: data.created_city_office?.city_name || "-",
      status: data.status,
      ig: data.ig,
      fb: data.fb,
      x: data.x,
      yt: data.yt,
      address: data.address,
      longitude: data.longitude,
      latitude: data.latitude,
      username: data.created_office.user_name,
    }));

    setDatasOffice(parsing);
    if (setRefreshData) {
      setRefreshData(true);
    }
  } catch (error) {
    console.error(error);
  }
};

export const addOfficeService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;

  const headers = generateHeaders({ accessToken });

  try {
    const response = await POST("crud/office", datas, headers);
    if (response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setLoadingButton(false);
      setRefreshData(false);
    }
  } catch (error) {
    console.error(error);
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
  }
};

export const updateOfficeService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;

  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/office", datas, headers);
    if (response.data.status) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setLoadingButton(false);
      setRefreshData(false);
    }
  } catch (error) {
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
    console.error(error);
  }
};

export const deleteOfficeService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  try {
    const response = await DELETE("crud/office", accessToken, id);
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
