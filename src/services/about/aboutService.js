import { DELETE, GET, POST, PUT } from "@/api/auth";
import showAlert from "@/utils/showAlert";
import Swal from "sweetalert2";

export const fetchAbout = async (token, extraOptions) => {
  const { setAbout } = extraOptions;
  try {
    const response = await GET("crud/about", token);
    const parse = response.payload.map((data) => ({
      id_about: data.id_about,
      about_meta: data.about_meta,
      about_body_id: data.about_body_id,
      about_body_en: data.about_body_en,
      status: data.status,
      created_by: data.created_about.user_name,
    }));
    setAbout(parse);
  } catch (error) {
    console.error("Error :", error);
  }
};

export const postAbout = async (data, extraOptions) => {
  const { setRefresh, token, handleCloseModal, refresh } = extraOptions;
  try {
    const response = await POST(`crud/about`, data, token);
    console.log(response);
    if (response.success === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateAbout = async (aboutId, updatedData, extraOptions) => {
  const { token, handleCloseModal, refresh, setRefresh } = extraOptions;
  try {
    const response = await PUT(`crud/about/${aboutId}`, updatedData, token);
    if (response.status === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error("Error updating about: ", error);
    throw error;
  }
};

export const deleteAbout = async (aboutId, extraOptions) => {
  const { token, setRefresh, refresh } = extraOptions;
  try {
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure want to delete?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "yes",
      cancelButtonText: "no",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await DELETE(`crud/about/${aboutId}`, token);
        showAlert("success", "Deleted", response.message);
        setRefresh(!refresh);
      }
    });
  } catch (error) {
    showAlert("error", "Error", error.message);
  }
};
