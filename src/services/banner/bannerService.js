import { DELETE, GET, POST, PUT } from "@/api/auth";
import showAlert from "@/utils/showAlert";

export const fetchBanner = async (token, extraOptions) => {
  const { setBanner } = extraOptions;
  try {
    const response = await GET("crud/banner", token);
    const parse = response.payload.map((data) => ({
      id_banner: data.id_banner,
      banner_name: data.banner_name,
      start_date_banner: data.start_date_banner,
      end_date_banner: data.end_date_banner,
      status: data.status,
    }));
    console.log(response);
    setBanner(parse);
  } catch (error) {
    console.error("Error fetching banner: ", error);
    throw error;
  }
};

export const updateBanner = async (bannerId, updatedData, token) => {
  try {
    const response = await PUT(
      `crud/banner/${bannerId}`,
      updatedData,
      token,
      true
    );
    return response;
  } catch (error) {
    showAlert("error", "Error", error.response.data.message);
    throw error;
  }
};

export const postBanner = async (data, token) => {
  try {
    const response = await POST(`crud/banner`, data, token, true);
    return response;
  } catch (error) {
    showAlert("error", "Error", error.response.data.message);
    throw error;
  }
};

export const deleteBanner = async (bannerId, token) => {
  console.log("Ini token: ", token);
  try {
    const response = await DELETE(`crud/banner/${bannerId}`, token);
    return response;
  } catch (error) {
    console.error("error delete :", error);
  }
};

// bannerService.js
const normalizeDate = (date) => {
  // Fungsi normalisasi tanggal
  return new Date(date).toISOString().split("T")[0];
};

const filterBannersForDate = (banners, date, colorEvent) => {
  const normalizedDate = normalizeDate(date);

  return banners
    .map((bannerItem, index) => {
      const startDate = normalizeDate(new Date(bannerItem.start_date_banner));
      const endDate = normalizeDate(new Date(bannerItem.end_date_banner));

      if (normalizedDate >= startDate && normalizedDate <= endDate) {
        return {
          ...bannerItem,
          color: colorEvent[index % colorEvent.length],
        };
      }
      return null;
    })
    .filter((item) => item !== null);
};

export const getBannerForDate = (
  date,
  banner,
  movedBanners = [],
  colorEvent
) => {
  const movedBannerIds = new Set(movedBanners.map((b) => b.id_banner));

  const originalBanners = filterBannersForDate(
    banner.filter((bannerItem) => !movedBannerIds.has(bannerItem.id_banner)),
    date,
    colorEvent
  );

  const movedBannersForDate = filterBannersForDate(
    movedBanners,
    date,
    colorEvent
  );

  return [...originalBanners, ...movedBannersForDate];
};
