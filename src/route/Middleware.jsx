import { useCheckingToken } from "../hooks";
import { Navigate } from "react-router-dom";
import { useStore } from "../store/store";

const Middleware = ({ children, type }) => {
    const { account, logout } = useStore();

    useCheckingToken(account, type, logout);

    if (type === "not-required") {
        return account.accessToken ? <Navigate to="/dashboard" /> : children;
    }

    if (type === "required") {
        return account.accessToken ? children : <Navigate to="/" />;
    }

    return null;
};

export default Middleware;
