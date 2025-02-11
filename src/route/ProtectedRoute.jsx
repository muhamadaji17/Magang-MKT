import { Navigate } from 'react-router-dom';
import { useStore } from '../store/store';

const ProtectedRoute = ({ children, type }) => {
    const { account, phone_number } = useStore();

    if (type === 'phone') {
        return phone_number ? children : <Navigate to='/forgot-password' />;
    }

    if (type === 'not-login') {
        return account.username ? <Navigate to='/dashboard' /> : children;
    }

    if (type === 'login') {
        return account.username ? children : <Navigate to='/login' />;
    }

    return null;
};

export default ProtectedRoute;
