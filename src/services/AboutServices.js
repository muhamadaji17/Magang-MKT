import { DELETE_DATAS, GET_DATAS, POST_DATAS, PUT_DATAS } from "../api";
import { AlertForm } from "../components/atoms";
import Cookies from "js-cookie";

export const GetAboutService = async (
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await GET_DATAS(`crud/about`, token);

        const datas = response.data.payload.map((item) => ({
            id: item.id_about,
            about_body_en: item.about_body_en,
            about_body_id: item.about_body_id,
            about_meta: item.about_meta,
            status: item.status,
            createdAt: item.createdAt,
        }));
        setState(datas);
        setReGetDatas(true);
    } catch (error) {
        if (error.response.status === 401) {
            Cookies.remove("accessToken");
            window.location.reload();
        }
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};

export const AddAboutService = async (
    data,
    token,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await POST_DATAS("crud/about", data, token);
        setReGetDatas(false);
        reset();
        AlertForm({
            icon: "success",
            text: response.data.message,
            title: "success",
        });
        setShowModal(false);
    } catch (error) {
        if (error.response.status === 401) {
            Cookies.remove("accessToken");
            window.location.reload();
        }
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};

export const EditAboutService = async (
    data,
    token,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await PUT_DATAS(`crud/about/${data.id}`, data, token);
        setReGetDatas(false);
        reset();
        AlertForm({
            icon: "success",
            text: response.data.message,
            title: "success",
        });
        setShowModal(false);
    } catch (error) {
        if (error.response.status === 401) {
            Cookies.remove("accessToken");
            window.location.reload();
        }
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};

export const DeleteAboutService = async (
    id,
    accessToken,
    setShowModal,
    setLoading,
    setReGetDatas
) => {
    try {
        const response = await DELETE_DATAS(`crud/about/${id}`, accessToken);
        setReGetDatas(false);
        AlertForm({
            icon: "success",
            text: response.data.message,
            title: "success",
        });
        setShowModal(false);
    } catch (error) {
        if (error.response.status === 401) {
            Cookies.remove("accessToken");
            window.location.reload();
        }
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};
