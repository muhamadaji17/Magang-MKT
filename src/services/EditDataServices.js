import { PUT_DATAS } from '../api';
import AlertForm from '../utils/SweetAlert';

export const EditDepartmentService = async (
    data,
    accessToken,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas,
    id
) => {
    try {
        setLoading(true);
        const response = await PUT_DATAS(
            `crud/departement/${id}`,
            data,
            accessToken
        );
        console.log(response);
        reset();
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
