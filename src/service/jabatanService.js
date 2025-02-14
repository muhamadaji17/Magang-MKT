import { apiDelete, apiGet, apiPost, apiPut } from "../api/apiCall";
import { showAlert } from "../utils";

// New

export const fetchJabatan = async (token, refresh) => {
  try {
    const jabatan = await apiGet(`/crud/jabatan`, token);
    const parsing = jabatan.payload.map((data) => ({
      nama_jabatan: data.nama_jabatan,
      jabatan_code: data.jabatan_code,
      username: data.created_admin.username,
      createdAt: data.createdAt,
      id: data.id,
    }));
    console.log("Ini Parsing:", parsing);
    refresh(true);
    return parsing;
  } catch (error) {
    console.error("Error fetching data", error);
    showAlert("Error", "Gagal mengambil data", "error", 5000);
  }
};

export const handleAddPosition = async (
  dataPost,
  token,
  closeModal,
  refresh
) => {
  try {
    const response = await apiPost(`/crud/jabatan`, dataPost, token);
    showAlert("Success", response.message, "success", 5000);
    refresh(false);
    closeModal();
  } catch (e) {
    console.log(e);
    showAlert("Error", e.config.data, "error", 5000);
  }
};

export const handleEditPosition = async (
  id,
  formData,
  token,
  closeEditModal,
  refresh
) => {
  try {
    const updatedData = {
      nama_jabatan: formData?.nama_jabatan, // update nama
    };

    const response = await apiPut(`/crud/jabatan/${id}`, updatedData, token);

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

export const confirmDeletePosition = async (
  id,
  token,
  closeDeleteModal,
  refresh
) => {
  try {
    const response = await apiDelete(`/crud/jabatan/${id}`, token);
    showAlert("Success", response.message, "success", 5000);
    refresh(false);
    closeDeleteModal();
  } catch (error) {
    showAlert("Error", "Gagal menghapus departemen", "error", 5000);
  }
};
