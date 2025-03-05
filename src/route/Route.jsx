import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    LoginPage,
    DashboardPage,
    AboutPage,
    FilmPage,
    BannerPage,
} from "../pages";
import { Layout } from "../components/templates";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute type="not-required">
                            <LoginPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute type="required">
                            <Layout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<DashboardPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="films" element={<FilmPage />} />
                    <Route path="banner" element={<BannerPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
