import { TriggerAlert } from "../utils/TriggerAlert";
import { POST_DATA, PUT_DATA, GET, DELETE } from "../api";

const addDataDepartementService = async ({
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

const editDataDepartementService = async ({
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

const getDataDepartementService = async (
  accessToken,
  setDatas,
  setUpdateData,

  setSearchQuery
) => {
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
    setSearchQuery("");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const deleteDataDepartementService = async ({
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
      text: error.message,
    });
  } finally {
    setLoading(false);
    setShowModal(false);
  }
};

const searchDataDepartementService = async (
  accessToken,
  setDatas,
  query,
  setUpdateData
) => {
  try {
    const response = await GET(
      `departement/by?nama_departement=${query}`,
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
