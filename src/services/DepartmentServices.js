import { POST_DATAS, DELETE_DATAS, PUT_DATAS, GET_DATAS } from '../api';
import AlertForm from '../utils/SweetAlert';

export const GetDepartmentsServices = async (
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await GET_DATAS(`crud/departement`, token);
        const datas = response.data.payload.map((item) => ({
            id: item.id,
            nama_departement: item.nama_departement,
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

export const AddDepartmentService = async (
    data,
    accessToken,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
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

export const EditDepartmentService = async (
    data,
    id,
    accessToken,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
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

export const DeleteDepartmentService = async (
    id,
    accessToken,
    setShowModal,
    setLoading,
    setReGetDatas
) => {
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

export const SearchDepartmentServices = async (
    searchData,
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await GET_DATAS(
            `crud/departement/by?nama_departement=${searchData}`,
            token
        );
        const datas = response.data.payload.map((item) => ({
            id: item.id,
            nama_departement: item.nama_departement,
            departement_code: item.departement_code,
            createdAt: item.createdAt,
            created_admin: item.created_admin.username,
        }));
        setState(datas);
        setReGetDatas(true);
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
