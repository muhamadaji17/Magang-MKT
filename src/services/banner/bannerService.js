import { DELETE, GET, POST, PUT } from "@/api/auth";
import showAlert from "@/utils/showAlert";
import Swal from "sweetalert2";

export const fetchBanner = async (token, extraOptions) => {
  const { setBanner } = extraOptions;
  try {
    const response = await GET("crud/banner", token);
    const parse = response.payload.map((data) => ({
      id_banner: data.id_banner,
      banner_name: data.banner_name,
      banner_img: data.banner_img,
      start_date_banner: data.start_date_banner,
      end_date_banner: data.end_date_banner,
      status: data.status,
    }));
    setBanner(parse);
  } catch (error) {
    console.error("Error fetching banner: ", error);
    throw error;
  }
};

export const updateBanner = async (bannerId, updatedData, extraOptions) => {
  const { token, refresh, setRefresh, handleCloseModal } = extraOptions;
  try {
    const response = await PUT(
      `crud/banner/${bannerId}`,
      updatedData,
      token,
      true
    );
    if (response.status === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    showAlert("error", "Error", error.response.data.message);
    throw error;
  }
};

export const postBanner = async (data, extraOptions) => {
  const { token, setRefresh, refresh, handleCloseModal } = extraOptions;
  try {
    const response = await POST(`crud/banner`, data, token, true);
    if (response.success === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    showAlert("error", "Error", error.response.data.message);
    throw error;
  }
};

export const deleteBanner = async (bannerId, extraOptions) => {
  const { token, setRefresh, refresh, handleCloseModal } = extraOptions;
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
        const response = await DELETE(`crud/banner/${bannerId}`, token);
        showAlert("success", "Deleted", response.message);
        setRefresh(!refresh);
        handleCloseModal();
      }
    });
  } catch (error) {
    console.error("error delete :", error);
  }
};

const normalizeDate = (date) => {
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

export const getBannerById = (bannerId, banner) => {
  const getData = banner.find(
    (bannerItem) => bannerItem.id_banner === bannerId
  );

  const pharseStartDate = getData?.start_date_banner
    ? new Date(getData?.start_date_banner).toISOString().split("T")[0]
    : null;
  const pharseEndDate = getData?.end_date_banner
    ? new Date(getData?.end_date_banner).toISOString().split("T")[0]
    : null;

  return {
    ...getData,
    start_date_banner: pharseStartDate,
    end_date_banner: pharseEndDate,
  };
};
