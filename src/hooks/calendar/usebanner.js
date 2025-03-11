import { colorEvent } from "@/pattern/calendar/calendarPattern";
import {
  deleteBanner,
  fetchBanner,
  postBanner,
  updateBanner,
} from "@/services/banner/bannerService";
import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";
import showAlert from "@/utils/showAlert";
import Swal from "sweetalert2";

export const useBanner = () => {
  const [banner, setBanner] = useState([]);
  const [draggedBanner, setDraggedBanner] = useState(null);
  const [selectedBannerId, setSelectedBannerId] = useState(null);
  const {
    refresh,
    setRefresh,
    handleCloseModal,
    modalIsOpen,
    modalType,
    handleOpenModal,
    loading,
    setLoading,
    token,
  } = useGlobalHook();

  const getBanner = async () => {
    try {
      setLoading(true);
      const response = await fetchBanner(token);
      setBanner(response);
      console.log("Fetch Banner", response);
    } catch (error) {
      console.error("Error fetching banner: ", error);
    } finally {
      setLoading(false);
    }
  };

  const normalizeDate = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const getBannerForDate = (date, movedBanners = []) => {
    const normalizedDate = normalizeDate(date);

    // Buat objek untuk melacak ID banner yang telah dipindahkan
    const movedBannerIds = new Set(movedBanners.map((b) => b.id_banner));

    // Filter banner asli (jangan tampilkan yang sudah dipindahkan)
    const originalBanners = banner
      .filter((bannerItem) => !movedBannerIds.has(bannerItem.id_banner))
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

    // Filter banner yang dipindahkan yang harus muncul di tanggal ini
    const movedBannersForDate = movedBanners
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

    // Gabungkan kedua array
    return [...originalBanners, ...movedBannersForDate];
  };

  const onSubmit = async (data) => {
    try {
      const formData = { ...data, banner_img: data.banner_img[0] };

      const response = await postBanner(formData, token, true);
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
      return response;
    } catch (error) {
      console.error("error post :", error);
    }
  };

  const editSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        banner_img:
          typeof data.banner_img === "string"
            ? data.banner_img
            : data.banner_img[0],
      };
      const response = await updateBanner(
        selectedBannerId,
        formData,
        token,
        true
      );
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    } catch (error) {
      console.error("error post :", error);
    }
  };

  const deleteSubmit = async (bannerId) => {
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
          const response = await deleteBanner(bannerId, token);
          showAlert("success", "Deleted", response.message);
          handleCloseModal();
          setRefresh(!refresh); // Refresh setelah delete
        }
      });
    } catch (error) {
      console.error("Error deleting banner: ", error);
      showAlert("error", "Error", "Failed to delete banner.");
    }
  };

  const getBannerById = (bannerId) => {
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

  const handleOpenEditModal = (bannerId) => {
    setSelectedBannerId(bannerId);
    handleOpenModal("edit");
  };

  useEffect(() => {
    getBanner();
  }, [refresh]);

  return {
    banner,
    draggedBanner,
    getBanner,
    getBannerById,
    setDraggedBanner,
    getBannerForDate,
    onSubmit,
    modalIsOpen,
    modalType,
    handleCloseModal,
    handleOpenModal,
    selectedBannerId,
    handleOpenEditModal,
    editSubmit,
    deleteSubmit,
    loading,
  };
};
