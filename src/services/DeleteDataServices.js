import { DELETE_DATAS } from '../api';
import AlertForm from '../utils/SweetAlert';

export const DeleteDepartmentService = async (
    id,
    accessToken,
    setShowModal,
    setLoading,
    setReGetDatas
) => {
    console.log(setLoading);
    console.log(id);

    try {
        const response = await DELETE_DATAS(
            `crud/departement/${id}`,
            accessToken
        );
        AlertForm({
            icon: 'success',
            text: response.data.message,
            title: 'success',
        });
        setReGetDatas(false);
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
