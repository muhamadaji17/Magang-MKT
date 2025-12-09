import { DELETE, GET, PUT } from "../../api";
import { SwalAlertBasic } from "../../utils";
import { generateEndpointWithQuery } from "../generateEndpointWithQuery";
import { generateHeaders } from "../generateHeaders";

export const getSubscribersService = async (accessToken, extraOptions) => {
  const { setRefreshData, setDatasSubscribers, searchQuery } = extraOptions;
  const queryParams = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(
      `crud/subscribers/by?${queryParams}`,
      accessToken
    );

    setDatasSubscribers(response.data.payload);
    setRefreshData(true);
  } catch (error) {
    console.error(error);
  }
};

export const updateSubscribersService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;

  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/subscribers", datas, headers);

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
    SwalAlertBasic({ icon: "error", text: error.response.data.message });
  }
};

export const deleteSubscribersService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;
  try {
    const response = await DELETE("crud/subscribers", accessToken, id);

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
