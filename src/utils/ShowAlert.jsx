import Swal from "sweetalert2";

/**
 * Reusable SweetAlert function
 * @param {Object} options - SweetAlert options
 * @param {string} options.title - Title of the alert
 * @param {string} options.text - Text content of the alert
 * @param {string} [options.icon] - Type of icon ('success', 'error', 'warning', 'info', 'question')
 * @param {boolean} [options.showConfirmButton] - Show confirm button (default: true)
 * @param {number} [options.timer] - Auto-close timer (in milliseconds)
 */
const ShowAlert = ({
  title,
  text,
  icon = "info",
  showConfirmButton = true,
  timer = null,
}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showConfirmButton: showConfirmButton,
    timer: timer,
  });
};

export default ShowAlert;
