import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, DashboardPage, AboutPage } from '../pages';
import { DashboardTemplate } from '../components/templates';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <ProtectedRoute type='not-required'>
                            <LoginPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/dashboard'
                    element={
                        <ProtectedRoute type='required'>
                            <DashboardTemplate />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<DashboardPage />} />
                    <Route path='about' element={<AboutPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
