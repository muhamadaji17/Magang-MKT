import Swal from "sweetalert2";

const showAlert = (title, text, icon, timer) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    timer: timer,
    confirmButtonText: "Ok",
  });
};

export default showAlert;
