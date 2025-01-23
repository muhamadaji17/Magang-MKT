import { Navigate } from 'react-router-dom';
import { useStore } from '/src/store/store';

export const NotLoginRoute = ({ children }) => {
    const { accessToken } = useStore();

    return accessToken ? <Navigate to='/dashboard' /> : children;
};
