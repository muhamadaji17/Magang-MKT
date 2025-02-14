import { DELETE, GET, POST_DATA, PUT_DATA } from "../api";
import { TriggerAlert } from "../utils";
import { generateEndpointWithQuery } from "./generateEndpointWithQuery";

const getDataUnitService = async ({
  accessToken,
  setDatas,
  setLoading,
  setUpdateData,
  setSearchQuery,
}) => {
  setLoading(true);
  try {
    const response = await GET("unit", accessToken);
    const parsing = response.data.payload.map((data) => ({
      nama_unit: data.nama_unit,
      unit_code: data.unit_code,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      nama_departement: data.id_departement_departement.nama_departement,
      id_departement: data.id_departement,
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

const addDataUnitService = async ({
  accessToken,
  data,
  setLoading,
  handleShowModal,
  setUpdateData,
  resetField,
}) => {
  setLoading(true);
  try {
    const response = await POST_DATA("unit", accessToken, data);
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

const deleteDataUnitService = async ({
  accessToken,
  handleShowModal,
  setUpdateData,
  dataId,
}) => {
  try {
    const response = await DELETE(`unit/${dataId}`, accessToken);
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
const editDataUnitService = async ({
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
    const response = await PUT_DATA(`unit/${dataId}`, accessToken, data);
    if (response.data.status) {
      TriggerAlert({
        title: "Berhasil!",
        text: "Berhasil memperbarui data",
        icon: "success",
      });
      console.log(response);
      resetField();
      setUpdateData(false);
      handleShowModal();
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

const searchDataUnitService = async ({
  accessToken,
  setDatas,
  searchQuery,
  setUpdateData,
}) => {
  const endpointBySearchQuery = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`unit/by?${endpointBySearchQuery}`, accessToken);
    const parsing = response.data.payload.map((data) => ({
      nama_unit: data.nama_unit,
      unit_code: data.unit_code,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      nama_departement: data.id_departement_departement.nama_departement,
      id: data.id,
    }));
    setDatas(parsing), setUpdateData(true);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const unitService = {
  get: getDataUnitService,
  add: addDataUnitService,
  delete: deleteDataUnitService,
  edit: editDataUnitService,
  search: searchDataUnitService,
};
