/** @format */

import { DELETE, GET, POST, PUT } from "../../api";
import { generateHeaders, generateEndpointWithQuery } from "..";
import { SwalAlertBasic } from "../../utils";

export const getCategoryContactService = async (accessToken, extraOptions) => {
  const { setDatasContactCategory, setRefreshData, searchQuery } = extraOptions;

  const paramsQuery = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(
      `crud/contact_sosmed/by?${paramsQuery}`,
      accessToken
    );

    const mapping = response.data.payload.map((item) => ({
      ...item,
      label: item.contact_sosmed_name,
      value: item.id_contact_sosmed,
    }));

    setDatasContactCategory(mapping);
    if (setRefreshData) {
      setRefreshData(true);
    }
  } catch (error) {
    console.error(error);
  }
};

export const addCategoryContactService = async (datas, extraOptions) => {
  const gabung = {
    contact_sosmed_name: datas.contact_sosmed_name,
    contact_sosmed_logo: datas.contact_sosmed_logo[0],
  };

  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });

  try {
    // const response = await POST("crud/contact_sosmed", datas, headers);
    const response = await POST("crud/contact_sosmed", gabung, headers);
    if (response.data.success) {
      SwalAlertBasic({
        icon: "success",
        text: response.data.message,
      });
      handleCloseModal();
      setRefreshData(false);
    }
  } catch (error) {
    console.error(error);
    if (error.response.status === 400) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
};

export const updateCategoryContactService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;

  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });

  try {
    const response = await PUT(
      "crud/contact_sosmed",
      {
        ...datas,
        contact_sosmed_logo:
          typeof datas.contact_sosmed_logo === "string"
            ? datas.contact_sosmed_logo
            : datas.contact_sosmed_logo[0],
      },
      headers
    );
    if (response.data.status) {
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
    if (error.response.status === 400) {
      SwalAlertBasic({
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
};

export const deleteCategoryContactService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;

  try {
    const response = await DELETE("crud/contact_sosmed", accessToken, id);
    if (response.data.status) {
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

    console.error("Delete Failed:", error);
    throw error;
  }
};
