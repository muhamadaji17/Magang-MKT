/** @format */

import { DELETE, GET, POST, PUT } from "../../api";
import { generateHeaders, generateEndpointWithQuery } from "..";
import { SwalAlertBasic } from "../../utils";

export const getContactService = async (accessToken, extraOptions) => {
  const { setDatasContact, setRefreshData, searchQuery } = extraOptions;

  const paramsQuery = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`crud/contact/by?${paramsQuery}`, accessToken);

    setDatasContact(response.data.payload);
    if (setRefreshData) {
      setRefreshData(true);
    }
  } catch (error) {
    console.error(error);
  }
};

export const addContactService = async (datas, extraOptions) => {
  // console.log(datas);

  // const gabung = {
  //   contact_name: datas.contact_name,
  //   contact_logo: datas.contact_logo[0],
  // };

  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;

  const headers = generateHeaders({
    accessToken,
    // contentType: "multipart/form-data",
  });

  try {
    const response = await POST("crud/contact", datas, headers);
    if (response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setRefreshData(false);
    }

    setLoadingButton(false);
  } catch (error) {
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
    console.error(error);
  }
};

export const updateContactService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;

  const headers = generateHeaders({ accessToken });

  try {
    const response = await PUT("crud/contact", datas, headers);
    if (response.data.status) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setRefreshData(false);
      setLoadingButton(false);
    }
  } catch (error) {
    console.error(error);
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
};

export const deleteContactService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;

  try {
    const response = await DELETE("crud/contact", accessToken, id);
    if (response.data.status) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setRefreshData(false);
      setLoadingButton(false);
    }
  } catch (error) {
    console.error("Delete Failed:", error);
    setLoadingButton(false);
    if (error.response.data.message) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
    throw error;
  }
};
