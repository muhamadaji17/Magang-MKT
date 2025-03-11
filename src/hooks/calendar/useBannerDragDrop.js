import { useState } from "react";
import { updateBanner } from "@/services/banner/bannerService";
import Swal from "sweetalert2";
import { createDragDropHandlers } from "@/pattern/calendar/handleDrag";
import useLogin from "@/store/useLogin";

const useBannerDragDrop = (getBanner) => {
  const [draggedBanner, setDraggedBanner] = useState(null);
  const [movedBanners, setMovedBanners] = useState([]);
  const { token } = useLogin();

  const { dragHandlers, dropHandlers } = createDragDropHandlers({
    onDargStartCallback: (_, banner) => {
      setDraggedBanner(_, banner);
    },

    onDropCallback: (_, draggedItem, date) => {
      if (!draggedItem) return;
      const startDate = new Date(draggedItem.start_date_banner);
      const endDate = new Date(draggedItem.end_date_banner);
      const duration = endDate.getTime() - startDate.getTime();

      const newStartDate = new Date(date);
      const newEndDate = new Date(newStartDate.getTime() + duration);

      const movedBanner = {
        ...draggedItem,
        start_date_banner: newStartDate.toISOString(),
        end_date_banner: newEndDate.toISOString(),
      };

      setMovedBanners((prev) => {
        const filtered = prev.filter(
          (b) => b.id_banner !== draggedItem.id_banner
        );
        return [...filtered, movedBanner];
      });
      setDraggedBanner(null); // Reset dragged banner
    },
  });

  const saveChanges = async () => {
    if (movedBanners.length === 0) return;

    Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to save all changes?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "yes",
      cancelButtonText: "no",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          for (const banner of movedBanners) {
            await updateBanner(banner.id_banner, banner, token);
          }
          setMovedBanners([]);
          getBanner();
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "All banners have been successfully updated.",
          });
        } catch (error) {
          console.error("error: ", error);
        }
      }
    });
  };

  return {
    dragHandlers,
    dropHandlers,
    saveChanges,
    movedBanners,
  };
};

export default useBannerDragDrop;
