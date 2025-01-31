import { GET_DATAS } from '../api';
import AlertForm from '../utils/SweetAlert';

export const GetDepartmentsServices = async (token, setState, loading) => {
    try {
        const response = await GET_DATAS('crud/departement', token);
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
