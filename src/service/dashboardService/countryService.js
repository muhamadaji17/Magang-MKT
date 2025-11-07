import { DELETE, GET, POST, PUT } from "../../api";
import { generateHeaders, generateEndpointWithQuery } from "../";
import { SwalAlertBasic } from "../../utils";

export const getCountryService = async (accessToken, extraOptions) => {
  const { setDatasCountry, setRefreshData, searchQuery } = extraOptions;

  const queryParams = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`crud/country/by?${queryParams}`, accessToken);

    const parsing = response.data.payload.map((data) => {
      return {
        id: data.id_country,
        country_name: data.country_name,
        country_code: data.country_code,
        username: data.created_country.user_name,
        status: data.status,
      };
    });

    console.log(response);
    setDatasCountry(parsing);
    if (setRefreshData) {
      setRefreshData(true);
    }
  } catch (error) {
    console.error(error);
  }
};

export const addCountryService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({ accessToken });
  try {
    const response = await POST("crud/country", datas, headers);
    console.log(response);

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

export const updateCountryService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  const headers = generateHeaders({ accessToken });
  try {
    const response = await PUT("crud/country", datas, headers);
    console.log(response);
    if (response.data.status) {
      alert(response.data.message);
      handleCloseModal();
      setRefreshData(false);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteCountryService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  try {
    const response = await DELETE("crud/country", accessToken, id);
    if (response.data.success) {
      alert(response.data.message);
      handleCloseModal();
      setRefreshData(false);
    }
    console.log(response);
  } catch (error) {
    console.error("Delete Failed:", error);
    throw error;
  }
};
