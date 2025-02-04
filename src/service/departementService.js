import { TriggerAlert } from "../utils/TriggerAlert";
import { POST_DATA, PUT_DATA, GET, DELETE } from "../api";

export const addDataDepartementService = async ({
  accessToken,
  data,
  setLoading,
  setShowModal,
  setUpdateData,
  resetField,
}) => {
  try {
    const response = await POST_DATA("departement", accessToken, data);
    if (response.data.status) {
      TriggerAlert({
        title: "Berhasil!",
        text: "Berhasil menambahkan data",
        icon: "success",
      });
      console.log(response);
      resetField();
      setShowModal(false);
      setUpdateData((prev) => !prev);
    }
  } catch (error) {
    console.error(error);

    TriggerAlert({
      title: "Gagal!",
      text: error.response.data.message,
      icon: "error",
    });
  } finally {
    setLoading(false);
  }
};

export const editDataDepartementService = async ({
  accessToken,
  data,
  dataId,
  setLoading,
  setShowModal,
  setUpdateData,
  resetField,
}) => {
  try {
    const response = await PUT_DATA(`departement/${dataId}`, accessToken, data);
    if (response.data.status) {
      TriggerAlert({
        title: "Berhasil!",
        text: "Berhasil memperbarui data",
        icon: "success",
      });
      console.log(response);
      resetField();
      setShowModal(false);
      setUpdateData(false);
    }
  } catch (error) {
    console.error(error);

    TriggerAlert({
      title: "Gagal!",
      text: error.response.data.message,
      icon: "error",
    });
  } finally {
    setLoading(false);
  }
};

export const getDataDepartementService = async (
  accessToken,
  setState,
  setUpdateData
) => {
  try {
    const response = await GET("departement", accessToken);
    setState(response.data.payload);
    setUpdateData(true);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteDataDepartementService = async ({
  accessToken,
  setLoading,
  setShowModal,
  setUpdateData,
  dataId,
}) => {
  try {
    const response = await DELETE(`departement/${dataId}`, accessToken);
    console.log(response);
    if (response.data.status) {
      setUpdateData(false);
      TriggerAlert({
        text: "Data telah dihapus",
        title: "Berhasil!",
        icon: "success",
      });
    }
    setUpdateData(false);
  } catch (error) {
    console.error(error);

    TriggerAlert({
      icon: "error",
      title: "Gagal!",
      text: error.message,
    });
  } finally {
    setLoading(false);
    setShowModal(false);
  }
};
