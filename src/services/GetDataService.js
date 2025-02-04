import { GET_DATAS } from '../api';
import AlertForm from '../utils/SweetAlert';

export const GetDepartmentsServices = async (
    token,
    setState,
    loading,
    setReGetDatas
) => {
    try {
        loading(true);
        const response = await GET_DATAS(`crud/departement`, token);
        setState(response);
        setReGetDatas(true);
    } catch (error) {
        console.log(error.response.data.message);
        AlertForm({
            icon: 'error',
            text: error.response.data.message,
            title: 'failed',
        });
    } finally {
        loading(false);
    }
};

export const GetDepartmentByIdService = async (
    id,
    token,
    setState,
    loading
) => {
    try {
        loading(true);
        const response = await GET_DATAS(
            `crud/departement/getone/${id}`,
            token
        );
        console.log(response);
        setState(response);
    } catch (error) {
        console.log(error.response.data.message);
        AlertForm({
            icon: 'error',
            text: error.response.data.message,
            title: 'failed',
        });
    } finally {
        loading(false);
    }
};
