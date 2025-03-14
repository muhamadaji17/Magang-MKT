import { DELETE_DATAS, GET_DATAS, PUT_DATAS, POST_DATAS } from "../api";
import { AlertForm } from "../components/atoms";
import Cookies from "js-cookie";

export const GetCountryService = async (
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await GET_DATAS(`crud/country`, token);
        const datas = response.data.payload.map((item) => ({
            id: item.id_country,
            country_name: item.country_name,
            country_code: item.country_code,
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

export const AddCountryService = async (
    data,
    token,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await POST_DATAS("crud/country", data, token);
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

export const EditCountryService = async (
    data,
    token,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await PUT_DATAS(
            `crud/country/${data.id}`,
            data,
            token
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

export const DeleteCountryService = async (
    id,
    accessToken,
    setShowModal,
    setLoading,
    setReGetDatas
) => {
    try {
        const response = await DELETE_DATAS(`crud/country/${id}`, accessToken);
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

export const SearchCountryServices = async (
    searchData,
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await GET_DATAS(
            `crud/country?search=${searchData}`,
            token
        );
        const datas = response.data.payload.map((item) => ({
            id: item.id_country,
            country_name: item.country_name,
            country_code: item.country_code,
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
