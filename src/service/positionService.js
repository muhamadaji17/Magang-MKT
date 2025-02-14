import { DELETE, GET, POST_DATA, PUT_DATA } from "../api";
import { TriggerAlert } from "../utils";
import { generateEndpointWithQuery } from "./generateEndpointWithQuery";

const getDataPositionService = async ({
  accessToken,
  setDatas,
  setLoading,
  setUpdateData,
  setSearchQuery,
}) => {
  setLoading(true);
  try {
    const response = await GET("jabatan", accessToken);
    const parsing = response.data.payload.map((data) => ({
      nama_jabatan: data.nama_jabatan,
      jabatan_code: data.jabatan_code,
      priority: data.priority,
      username: data.created_admin.username,
      id: data.id,
    }));
    setDatas(parsing);
    setUpdateData(true);
    setSearchQuery("");
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

const addDataPositionService = async ({
  accessToken,
  data,
  setLoading,
  handleShowModal,
  setUpdateData,
  resetField,
}) => {
  setLoading(true);
  try {
    const response = await POST_DATA("jabatan", accessToken, data);
    if (response.data.status) {
      TriggerAlert({
        title: "Berhasil!",
        text: "Berhasil menambahkan data",
        icon: "success",
      });
      console.log(response);
      resetField();
      handleShowModal();
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

const deleteDataPositionService = async ({
  accessToken,
  handleShowModal,
  setUpdateData,
  dataId,
}) => {
  try {
    const response = await DELETE(`jabatan/${dataId}`, accessToken);
    console.log(response);
    if (response.data.status) {
      setUpdateData(false);
      TriggerAlert({
        text: "Data berhasil dihapus",
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
      text: error.data.message,
    });
  } finally {
    handleShowModal();
  }
};
const editDataPositionService = async ({
  accessToken,
  data,
  dataId,
  setLoading,
  handleShowModal,
  setUpdateData,
  resetField,
}) => {
  setLoading(true);
  try {
    const response = await PUT_DATA(`jabatan/${dataId}`, accessToken, data);
    if (response.data.status) {
      TriggerAlert({
        title: "Berhasil!",
        text: "Berhasil memperbarui data",
        icon: "success",
      });
      console.log(response);
      resetField();
      handleShowModal();
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

const searchDataPositionService = async ({
  accessToken,
  setDatas,
  searchQuery,
  setUpdateData,
}) => {
  const endpointBySearchQuery = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(
      `jabatan/by?${endpointBySearchQuery}`,
      accessToken
    );
    const parsing = response.data.payload.map((data) => ({
      nama_jabatan: data.nama_jabatan,
      jabatan_code: data.jabatan_code,
      priority: data.priority,
      username: data.created_admin.username,
      id: data.id,
    }));
    setDatas(parsing);
    setUpdateData(true);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const positionService = {
  get: getDataPositionService,
  add: addDataPositionService,
  delete: deleteDataPositionService,
  search: searchDataPositionService,
  edit: editDataPositionService,
};
