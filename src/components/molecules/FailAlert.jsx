import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function FailAlert({ title, text, state }) {
    const MySwal = withReactContent(Swal);

    return MySwal.fire({
        title,
        text,
        icon: 'success',
    }).then(() => {
        state;
    });
}
