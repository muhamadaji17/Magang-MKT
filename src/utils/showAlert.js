import Swal from "sweetalert2";

const showAlert = (type, title, text, confirmButtonText = "OK") => {
  Swal.fire({
    icon: type,
    title: title,
    text: text,
    confirmButtonText: confirmButtonText,
    showCancelButton: false,
    reverseButtons: true,
  });
};

export default showAlert;
