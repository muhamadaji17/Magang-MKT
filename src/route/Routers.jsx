import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    RegisterPage,
    LoginPage,
    ForgotPassword,
    SettingPassword,
    Dashboard,
} from '../pages';
import { LoginRoute } from './LoginRoute';
import { NotLoginRoute } from './NotLoginRoute';
import { PhoneRoute } from './PhoneRoute';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/dashboard'
                    element={
                        <LoginRoute>
                            <Dashboard />
                        </LoginRoute>
                    }
                />
                <Route
                    path='/login'
                    element={
                        <NotLoginRoute>
                            <LoginPage />
                        </NotLoginRoute>
                    }
                />
                <Route
                    path='/register'
                    element={
                        <NotLoginRoute>
                            <RegisterPage />
                        </NotLoginRoute>
                    }
                />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route
                    path='/setting-password'
                    element={
                        <PhoneRoute>
                            <SettingPassword />
                        </PhoneRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
