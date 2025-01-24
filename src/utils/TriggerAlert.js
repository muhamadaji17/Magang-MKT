import Swal from "sweetalert2";

export const TriggerAlert = ({ title, text, icon }) => {
  Swal.fire({ title, text, icon });
};
