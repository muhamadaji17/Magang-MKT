import { Navigate } from 'react-router-dom';
import { useStore } from '/src/store/store';

export const PhoneRoute = ({ children }) => {
    const { phone_number } = useStore();

    return phone_number ? children : <Navigate to='/forgot-password' />;
};
