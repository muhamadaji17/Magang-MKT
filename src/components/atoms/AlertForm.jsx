import Swal from 'sweetalert2';

const AlertForm = ({ title, text, icon }) => {
    Swal.fire({
        title,
        text,
        icon,
    });
};

export default AlertForm;
