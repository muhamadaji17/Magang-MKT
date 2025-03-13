import { DELETE_DATAS, GET_DATAS, PUT_DATAS, POST_DATAS } from "../api";
import { AlertForm } from "../components/atoms";

export const GetOfficeService = async (
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await GET_DATAS(`crud/office`, token);
        const datas = response.data.payload.map((item) => ({
            id: item.id_office,
            id_city: item.id_city,
            office_name: item.office_name,
            address: item.address,
            ig: item.ig,
            fb: item.fb,
            x: item.x,
            yt: item.yt,
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

export const AddOfficeService = async (
    data,
    token,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await POST_DATAS("crud/office", data, token);
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

export const EditOfficeService = async (
    data,
    token,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await PUT_DATAS(`crud/office/${data.id}`, data, token);
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

export const DeleteOfficeService = async (
    id,
    accessToken,
    setShowModal,
    setLoading,
    setReGetDatas
) => {
    try {
        const response = await DELETE_DATAS(`crud/office/${id}`, accessToken);
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

export const SearchOfficeServices = async (
    searchData,
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const queryParams = new URLSearchParams(searchData).toString();
        const response = await GET_DATAS(
            `crud/office/by?${queryParams}`,
            token
        );
        const datas = response.data.payload.map((item) => ({
            id: item.id_office,
            id_city: item.id_city,
            office_name: item.office_name,
            address: item.address,
            ig: item.ig,
            fb: item.fb,
            x: item.x,
            yt: item.yt,
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
