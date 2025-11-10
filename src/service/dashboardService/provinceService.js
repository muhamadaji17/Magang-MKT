import { DELETE, GET, POST, PUT } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateEndpointWithQuery } from "../generateEndpointWithQuery";
import { generateHeaders } from "../generateHeaders";

export const getProvinceService = async (accessToken, extraOptions) => {
  const { setDatasProvince, setRefreshData, searchQuery } = extraOptions;
  const queryParams = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`crud/province/by?${queryParams}`, accessToken);
    const parsing = response.data.payload.map((data) => ({
      id: data.id_province,
      province_name: data.province_name,
      province_code: data.province_code,
      country_id: data.id_country,
      country_name: data.created_province_country?.country_name || "-",
      status: data.status,
      username: data.created_province.user_name,
    }));

    setDatasProvince(parsing);
    if (setRefreshData) {
      setRefreshData(true);
    }
  } catch (error) {
    console.error(error);
  }
};

export const addProvinceService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({ accessToken });
  try {
    const response = await POST("crud/province", datas, headers);
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

export const updateProvinceService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({ accessToken });
  try {
    const response = await PUT("crud/province", datas, headers);
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
  }
};

export const deleteProvinceService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  try {
    const response = await DELETE("crud/province", accessToken, id);
    if (response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setRefreshData(false);
    }
    console.log(response);
  } catch (error) {
    console.error("Delete Failed:", error);
    throw error;
  }
};
