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
