import { Navigate } from 'react-router-dom';
import { useStore } from '/src/store/store';

export const NotLoginRoute = ({ children }) => {
    const { account } = useStore();

    return account.accessToken ? <Navigate to='/dashboard' /> : children;
};
