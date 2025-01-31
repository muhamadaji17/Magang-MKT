import axios from 'axios';

export const POST_AUTH = async (endpoint, data) => {
    const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_DEV}/${endpoint}`,
        data,
        {
            headers: {
                'Content-Type': 'application/json',
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
                'Content-Type': 'application/json',
                'x-token': `mktech ${accessToken}`,
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
                'x-token': `mktech ${token}`,
            },
        }
    );
    return response;
};
