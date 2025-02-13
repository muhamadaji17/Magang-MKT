import { apiDelete, apiGet, apiPost, apiPut } from "../api/apiCall";
import { showAlert } from "../utils";

export const deleteDepartement = async (id, token) => {
  return await apiDelete(`/crud/departement/${id}`, token);
};

export const fetchDepartements = async (token) => {
  const result = await apiGet("/crud/departement", token);
  return result.payload;
};

// New

export const handleAddDepartement = async (dataPost, token, closeModal) => {
  try {
    const response = await apiPost(`/crud/departement`, dataPost, token);
    showAlert("Success", response.message, "success", 5000);
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
  closeEditModal
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
      closeEditModal();
    }
  } catch (error) {
    console.error("Gagal update data departemen", error);
    showAlert("Error", "Gagal mengupdate departemen", "error", 5000);
  }
};
