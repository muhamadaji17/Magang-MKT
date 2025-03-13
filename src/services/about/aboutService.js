import { GET } from "@/api/auth";

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
