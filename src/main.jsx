import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import LoginPage from './pages/Login.jsx';
import RegisterPage from './pages/Register.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import SettingPassword from './pages/SettingPassword.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/setting-password' element={<SettingPassword />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
