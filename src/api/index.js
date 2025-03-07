import axios from "axios";

export const POST_AUTH = async (endpoint, data) => {
    const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_DEV}/${endpoint}`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response;
};

export const GET_DATAS = async (endpoint, token) => {
    const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_DEV}/${endpoint}`,
        {
            headers: {
                "x-access-token": `mktech ${token}`,
            },
        }
    );
    return response;
};

export const POST_DATAS = async (endpoint, data, accessToken) => {
    const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_DEV}/${endpoint}`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `mktech ${accessToken}`,
            },
        }
    );
    return response;
};

export const POST_DATAS_FILE = async (endpoint, data, accessToken) => {
    const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_DEV}/${endpoint}`,
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "x-access-token": `mktech ${accessToken}`,
            },
        }
    );
    return response;
};

export const PUT_DATAS = async (endpoint, data, accessToken) => {
    const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL_DEV}/${endpoint}`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `mktech ${accessToken}`,
            },
        }
    );
    return response;
};

export const PUT_DATAS_FILE = async (endpoint, data, accessToken) => {
    const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL_DEV}/${endpoint}`,
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "x-access-token": `mktech ${accessToken}`,
            },
        }
    );
    return response;
};

export const DELETE_DATAS = async (endpoint, accessToken) => {
    const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL_DEV}/${endpoint}`,
        {
            headers: {
                "x-access-token": `mktech ${accessToken}`,
            },
        }
    );
    return response;
};
