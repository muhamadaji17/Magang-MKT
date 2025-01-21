import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function SuccessAlert({ title, text, state, link }) {
    const MySwal = withReactContent(Swal);

    return MySwal.fire({
        title,
        text,
        icon: 'success',
    }).then(() => {
        state;

        link;
    });
}
