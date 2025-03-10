import { DELETE_DATAS, GET_DATAS, PUT_DATAS, POST_DATAS } from "../api";
import { AlertForm } from "../components/atoms";

export const GetCityService = async (
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await GET_DATAS(`crud/city`, token);
        const datas = response.data.payload.map((item) => ({
            id: item.id_city,
            id_province: item.id_province,
            city_name: item.city_name,
            city_code: item.city_code,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            status: item.status,
        }));
        setState(datas);
        setReGetDatas(true);
    } catch (error) {
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};

export const AddCityService = async (
    data,
    token,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await POST_DATAS("crud/city", data, token);
        setReGetDatas(false);
        reset();
        AlertForm({
            icon: "success",
            text: response.data.message,
            title: "success",
        });
        setShowModal(false);
    } catch (error) {
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};

export const EditCityService = async (
    data,
    token,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await PUT_DATAS(`crud/city/${data.id}`, data, token);
        setReGetDatas(false);
        reset();
        AlertForm({
            icon: "success",
            text: response.data.message,
            title: "success",
        });
        setShowModal(false);
    } catch (error) {
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};

export const DeleteCityService = async (
    id,
    accessToken,
    setShowModal,
    setLoading,
    setReGetDatas
) => {
    try {
        const response = await DELETE_DATAS(`crud/city/${id}`, accessToken);
        setReGetDatas(false);
        AlertForm({
            icon: "success",
            text: response.data.message,
            title: "success",
        });
        setShowModal(false);
    } catch (error) {
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};
