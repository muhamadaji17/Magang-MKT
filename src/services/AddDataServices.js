import { POST_DATAS } from '../api';
import AlertForm from '../utils/SweetAlert';

export const AddDepartmentService = async (
    data,
    accessToken,
    setShowModal,
    reset,
    setLoading
) => {
    setLoading(true);
    try {
        const response = await POST_DATAS(
            'crud/departement',
            data,
            accessToken
        );
        reset();
        AlertForm({
            icon: 'success',
            text: response.data.message,
            title: 'success',
        });
        console.log(response);
        setShowModal(false);
    } catch (error) {
        console.log(error);
        AlertForm({
            icon: 'error',
            text: error.response.data.message,
            title: 'failed',
        });
        console.log(error);
    } finally {
        setLoading(false);
    }
};
