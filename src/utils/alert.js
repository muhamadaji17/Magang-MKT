/** @format */

import Swal from "sweetalert2";
import Cookies from "js-cookie";

export const SwalAlertBasic = ({ icon, title, ...props }) => {
  Swal.fire({
    position: "center",
    icon,
    title,
    ...props,
  }).then((result) => {
    if (!result.isDismissed && result.isConfirmed && title === "Unauthorized") {
      // Redirect ke path /
      Cookies.remove("accessToken");
      window.location.href = "/";
    }
  });
};

export const SwalAlertConfirm = ({
  title = "Apa kamu yakin?",
  iconConfirm = "success",
  titleConfirm = "Deleted!",
  confirmButtonText = "Yes, delete it!",
  cancelButtonText = "Cancel",
  confirmButtonColor = "#3085d6",
  cancelButtonColor = "#d33",
  textConfirm = "Your file has been deleted.",
  handleConfirm,
  alertAfterConfirm = true,
  // handleSetSchedule,
  handleSetSchedule,
  inputDataEdit,
  handleSubmitEdit,
  judulEdit,
  ...props
}) => {
  Swal.fire({
    title: title,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: confirmButtonColor,
    cancelButtonColor: cancelButtonColor,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    ...props,
  }).then((result) => {
    if (result.isConfirmed) {
      handleConfirm();

      if (alertAfterConfirm) {
        // Swal.fire({
        //   title: titleConfirm,
        //   text: textConfirm,
        //   icon: iconConfirm,
        // });
        // handleSetSchedule();
      }
    }
  });
};
