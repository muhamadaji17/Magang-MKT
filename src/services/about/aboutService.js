import { GET, POST } from "@/api/auth";
import showAlert from "@/utils/showAlert";

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
