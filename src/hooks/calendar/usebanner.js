import {
  deleteBanner,
  fetchBanner,
  getBannerById,
  postBanner,
  updateBanner,
} from "@/services/banner/bannerService";
import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";
import { getBannerForDate } from "@/services/calendarService";
import { handleSubmit } from "@/pattern/handleSubmit";

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
    token,
  } = useGlobalHook();

  const getBannerForDates = (date, movedBanners) => {
    return getBannerForDate(date, banner, movedBanners);
  };

  const postSubmit = async (data) => {
    const formData = { ...data, banner_img: data.banner_img[0] };
    handleSubmit(formData, postBanner, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const editSubmit = async (data) => {
    const formData = {
      ...data,
      banner_img:
        typeof data.banner_img === "string"
          ? data.banner_img
          : data.banner_img[0],
    };
    updateBanner(selectedBannerId, formData, {
      token,
      refresh,
      setRefresh,
      handleCloseModal,
    });
  };

  const deleteSubmit = async (bannerId) => {
    deleteBanner(bannerId, {
      token,
      setRefresh,
      refresh,
      handleCloseModal,
    });
  };

  const selectedBanner = selectedBannerId
    ? getBannerById(selectedBannerId, banner)
    : null;

  const handleOpenEditModal = (bannerId) => {
    setSelectedBannerId(bannerId);
    handleOpenModal("edit");
  };

  useEffect(() => {
    fetchBanner(token, { setBanner, setRefresh });
  }, [refresh]);

  return {
    banner,
    draggedBanner,
    setDraggedBanner,
    getBannerForDates,
    postSubmit,
    modalIsOpen,
    modalType,
    handleCloseModal,
    handleOpenModal,
    handleOpenEditModal,
    editSubmit,
    deleteSubmit,
    loading,
    refresh,
    setRefresh,
    selectedBanner,
  };
};
