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
            id_departement: item.id_departement,
            nama_unit: item.nama_unit,
            unit_code: item.unit_code,
            nama_departement: item.id_departement_departement.nama_departement,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
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

export const AddUnitService = async (
    data,
    accessToken,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await POST_DATAS('crud/unit', data, accessToken);
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

export const EditUnitService = async (
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
        const response = await PUT_DATAS(`crud/unit/${id}`, data, accessToken);
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

export const DeleteUnitService = async (
    id,
    accessToken,
    setShowModal,
    setLoading,
    setReGetDatas
) => {
    try {
        const response = await DELETE_DATAS(`crud/unit/${id}`, accessToken);
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

export const SearchUnitServices = async (
    searchData,
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const queryParams = new URLSearchParams(searchData).toString();
        const response = await GET_DATAS(`crud/unit/by?${queryParams}`, token);
        const datas = response.data.payload.map((item) => ({
            id: item.id,
            id_departement: item.id_departement,
            nama_unit: item.nama_unit,
            unit_code: item.unit_code,
            nama_departement: item.id_departement_departement.nama_departement,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
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
