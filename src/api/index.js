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
