import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    Register,
    Login,
    ForgotPassword,
    SettingPassword,
    Dashboard,
    Employee,
    LandingPage,
    Department,
} from '../pages';
import ProtectedRoute from './ProtectedRoute';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route
                    path='/dashboard'
                    element={
                        <ProtectedRoute type='login'>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/employee'
                    element={
                        <ProtectedRoute type='login'>
                            <Employee />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/department'
                    element={
                        // <ProtectedRoute type='login'>
                        <Department />
                        // </ProtectedRoute>
                    }
                />
                <Route
                    path='/login'
                    element={
                        <ProtectedRoute type='not-login'>
                            <Login />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/register'
                    element={
                        <ProtectedRoute type='not-login'>
                            <Register />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/forgot-password'
                    element={
                        <ProtectedRoute type='not-login'>
                            <ForgotPassword />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/setting-password'
                    element={
                        <ProtectedRoute type='phone'>
                            <SettingPassword />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
