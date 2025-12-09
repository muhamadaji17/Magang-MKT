/** @format */

import { DELETE, GET, POST, PUT } from "../../api";
import { generateHeaders, generateEndpointWithQuery } from "..";
import { SwalAlertBasic } from "../../utils";

export const getMenuService = async (accessToken, extraOptions) => {
  const { setDataMenu, setRefreshData, searchQuery } = extraOptions;
  const queryParams = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`crud/menu/by?${queryParams}`, accessToken);

    const data = response.data;

    const mapping = data.payload?.map((item) => ({
      ...item,
      label: item.menu_name,
      value: item.id_menu,
      logo: item.menu_icon,
      parrent_name: item?.parent?.menu_name,
      id: item.id_menu,
    }));

    setDataMenu(mapping);
    if (setRefreshData) {
      setRefreshData(true);
    }
  } catch (error) {
    console.error(error);
  }
};

export const addMenuService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;
  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });
  try {
    const response = await POST(
      "crud/menu",
      { ...datas, menu_icon: datas.menu_icon[0] },
      headers
    );
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

export const updateMenuService = async (datas, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal } = extraOptions;

  const headers = generateHeaders({
    accessToken,
    contentType: "multipart/form-data",
  });

  try {
    const response = await PUT(
      "crud/menu",
      {
        ...datas,
        menu_icon:
          typeof datas.menu_icon === "string"
            ? datas.menu_icon
            : datas.menu_icon[0],
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
  } catch (error) {
    console.error(error);
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
  }
};

export const deleteMenuService = async (id, extraOptions) => {
  const { accessToken, setRefreshData, handleCloseModal, setLoadingButton } =
    extraOptions;
  try {
    const response = await DELETE("crud/menu", accessToken, id);

    if (response.data.status === true) {
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
    if (error.response.data.message) {
      SwalAlertBasic({ icon: "error", text: error.response.data.message });
    }
    throw error;
  }
};
