import { POST_DATAS, DELETE_DATAS, PUT_DATAS, GET_DATAS } from '../api';
import AlertForm from '../utils/SweetAlert';

export const GetUnitServices = async (
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await GET_DATAS(`crud/unit`, token);
        const datas = response.data.payload.map((item) => ({
            id: item.id,
            nama_unit: item.nama_unit,
            departement_code: item.departement_code,
            createdAt: item.createdAt,
            created_admin: item.created_admin.username,
        }));
        setState(datas);
        setReGetDatas(true);
    } catch (error) {
        console.log(error.response.data.message);
        AlertForm({
            icon: 'error',
            text: error.response.data.message,
            title: 'failed',
        });
    } finally {
        setLoading(false);
    }
};
