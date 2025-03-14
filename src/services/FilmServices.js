import {
    DELETE_DATAS,
    GET_DATAS,
    POST_DATAS_FILE,
    PUT_DATAS_FILE,
} from "../api";
import { AlertForm } from "../components/atoms";
import Cookies from "js-cookie";

export const GetFilmService = async (
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await GET_DATAS(`crud/films`, token);
        const datas = response.data.payload.map((item) => ({
            id: item.id_film,
            nama_film: item.nama_film,
            poster_film: item.poster_film,
            url_film: `${import.meta.env.VITE_VASE_URL_IMAGE}/films/${
                item.poster_film
            }`,
            trailer_film: item.trailer_film,
            sinopsis_film_id: item.sinopsis_film_id,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            status: item.status,
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

export const AddFilmService = async (
    data,
    token,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await POST_DATAS_FILE("crud/films", data, token);
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

export const EditFilmService = async (
    data,
    accessToken,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        console.log(data);

        const manipulateData = {
            nama_film: data.nama_film,
            poster_film: data.poster_film,
            trailer_film: data.trailer_film,
            sinopsis_film_id: data.sinopsis_film_id,
            status: data.status,
        };

        let { poster_film } = manipulateData;

        const manipulatedImg =
            typeof poster_film === "string" ? null : poster_film;

        const bodyres = {
            ...manipulateData,
            poster_film: manipulatedImg,
        };

        setLoading(true);
        const response = await PUT_DATAS_FILE(
            `crud/films/${data.id}`,
            bodyres,
            accessToken
        );
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

export const DeleteFilmService = async (
    id,
    accessToken,
    setShowModal,
    setLoading,
    setReGetDatas
) => {
    try {
        const response = await DELETE_DATAS(`crud/films/${id}`, accessToken);
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

export const SearchFilmServices = async (
    searchData,
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const queryParams = new URLSearchParams(searchData).toString();
        const response = await GET_DATAS(`crud/films/by?${queryParams}`, token);
        const datas = response.data.payload.map((item) => ({
            id: item.id_film,
            nama_film: item.nama_film,
            poster_film: item.poster_film,
            url_film: `${import.meta.env.VITE_VASE_URL_IMAGE}/films/${
                item.poster_film
            }`,
            trailer_film: item.trailer_film,
            sinopsis_film_id: item.sinopsis_film_id,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            status: item.status,
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
