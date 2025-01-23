import Swal from 'sweetalert2';

export function AlertForm({ title, text, icon }) {
    Swal.fire({
        title,
        text,
        icon,
    });
}
