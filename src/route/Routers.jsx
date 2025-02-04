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
import { DashboardTemplate } from '../components/templates';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route
                    path='/dashboard'
                    element={
                        // <ProtectedRoute type='login'>
                        <DashboardTemplate />
                        // </ProtectedRoute>
                    }
                >
                    <Route index element={<Dashboard />} />
                    <Route path='employee' element={<Employee />} />
                    <Route path='department' element={<Department />} />
                </Route>

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
