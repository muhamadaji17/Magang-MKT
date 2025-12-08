import { DELETE, GET, POST, PUT } from "../../api";
import { generateHeaders, generateEndpointWithQuery } from "../";
import { SwalAlertBasic } from "../../utils";

export const getCityService = async (accessToken, extraOptions) => {
  const { setDatasCity, setRefreshData, searchQuery } = extraOptions;
  const queryParams = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`crud/city/by?${queryParams}`, accessToken);

    const parsing = response.data.payload.map((data) => ({
      id: data.id_city,
      city_name: data.city_name,
      city_code: data.city_code,
      id_province: data.id_province,
      province_name: data.created_province_city?.province_name || "-",
      status: data.status,
      username: data.created_city.user_name,
      label: data.city_name,
      value: data.id_city,
    }));

    setDatasCity(parsing);
    if (setRefreshData) {
      setRefreshData(true);
    }
  } catch (error) {
    console.error(error);
  }
};

export const addCityService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;
  const headers = generateHeaders({ accessToken });
  try {
    const response = await POST("crud/city", datas, headers);
    if (response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      setRefreshData(false);
      handleCloseModal();
      setLoadingButton(false);
    }
  } catch (error) {
    console.error(error);
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
  }
};

export const updateCityService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;

  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/city", datas, headers);

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
    console.error(error);
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
  }
};

export const deleteCityService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;
  try {
    const response = await DELETE("crud/city", accessToken, id);
    if (response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setRefreshData(false);
    }
    console.log(response);
    setLoadingButton(false);
  } catch (error) {
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
    console.error("Delete Failed:", error);
    throw error;
  }
};
