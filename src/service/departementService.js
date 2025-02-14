import { TriggerAlert } from "../utils/TriggerAlert";
import { POST_DATA, PUT_DATA, GET, DELETE } from "../api";
import { generateEndpointWithQuery } from "./generateEndpointWithQuery";

const addDataDepartementService = async ({
  accessToken,
  data,
  setLoading,
  handleShowModal,
  setUpdateData,
  resetField,
}) => {
  setLoading(true);
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

const editDataDepartementService = async ({
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
    const response = await PUT_DATA(`departement/${dataId}`, accessToken, data);
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

const getDataDepartementService = async ({
  accessToken,
  setDatas,
  setLoading,
  setUpdateData,
}) => {
  setLoading(true);
  try {
    const response = await GET("departement", accessToken);
    const parsing = response.data.payload.map((data) => ({
      nama_departement: data.nama_departement,
      departement_code: data.departement_code,
      username: data.created_admin.username,
      createdAt: data.createdAt,
      id: data.id,
    }));
    setDatas(parsing);
    setUpdateData(true);
    console.log(response);
  } catch (error) {
    console.log(error);
    TriggerAlert({
      text: error.data?.message,
      icon: "error",
      title: "Error!",
    });
  } finally {
    setLoading(false);
  }
};

const deleteDataDepartementService = async ({
  accessToken,
  handleShowModal,
  setUpdateData,
  dataId,
}) => {
  try {
    const response = await DELETE(`departement/${dataId}`, accessToken);
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

const searchDataDepartementService = async ({
  accessToken,
  setDatas,
  searchQuery,
  setUpdateData,
}) => {
  try {
    const endpointBySearchQuery = generateEndpointWithQuery(searchQuery);

    const response = await GET(
      `departement/by?${endpointBySearchQuery}`,
      accessToken
    );
    const parsing = response.data.payload.map((data) => ({
      nama_departement: data.nama_departement,
      departement_code: data.departement_code,
      username: data.created_admin.username,
      createdAt: data.createdAt,
      id: data.id,
    }));
    setDatas(parsing), setUpdateData(true);
  } catch (error) {
    console.error(error);
  }
};

export const departementService = {
  add: addDataDepartementService,
  get: getDataDepartementService,
  delete: deleteDataDepartementService,
  edit: editDataDepartementService,
  search: searchDataDepartementService,
};
