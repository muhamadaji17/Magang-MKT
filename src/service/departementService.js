import { apiDelete, apiGet, apiPost, apiPut } from "../api/apiCall";
import { showAlert } from "../utils";

// New

export const fetchDepartements = async (token, refresh) => {
  try {
    const departements = await apiGet(`/crud/departement/`, token);
    const parsing = departements.payload.map((data) => ({
      nama_departement: data.nama_departement,
      departement_code: data.departement_code,
      username: data.created_admin.username,
      createdAt: data.createdAt,
      id: data.id,
    }));
    refresh(true);
    return parsing;
  } catch (error) {
    console.error("Error fetching data", error);
    showAlert("Error", "Gagal mengambil data", "error", 5000);
  }
};

export const handleAddDepartement = async (
  dataPost,
  token,
  closeModal,
  refresh
) => {
  try {
    const response = await apiPost(`/crud/departement`, dataPost, token);
    showAlert("Success", response.message, "success", 5000);
    refresh(false);
    closeModal();
  } catch (e) {
    console.log(e);
    showAlert("Error", e.config.data, "error", 5000);
  }
};

export const handleEditDepartement = async (
  id,
  formData,
  token,
  closeEditModal,
  refresh
) => {
  try {
    const updatedData = {
      nama_departement: formData?.nama_departement, // update nama
    };

    const response = await apiPut(
      `/crud/departement/${id}`,
      updatedData,
      token
    );

    if (response) {
      showAlert("Success", response.message, "success", 5000);
      refresh(false);
      closeEditModal();
    }
  } catch (error) {
    console.error("Gagal update data departemen", error);
    showAlert("Error", "Gagal mengupdate departemen", "error", 5000);
  }
};

export const confirmDeleteDepartement = async (
  id,
  token,
  closeDeleteModal,
  refresh
) => {
  try {
    const response = await apiDelete(`/crud/departement/${id}`, token);
    showAlert("Success", response.message, "success", 5000);
    refresh(false);
    closeDeleteModal();
  } catch (error) {
    showAlert("Error", "Gagal menghapus departemen", "error", 5000);
  }
};
