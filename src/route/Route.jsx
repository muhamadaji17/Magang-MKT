import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    LoginPage,
    DashboardPage,
    AboutPage,
    FilmPage,
    BannerPage,
    CountryPage,
    ProvincePage,
} from "../pages";
import { Layout } from "../components/templates";
import Middleware from "./Middleware";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Middleware type="not-required">
                            <LoginPage />
                        </Middleware>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <Middleware type="required">
                            <Layout />
                        </Middleware>
                    }
                >
                    <Route index element={<DashboardPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="films" element={<FilmPage />} />
                    <Route path="banner" element={<BannerPage />} />
                    <Route path="country" element={<CountryPage />} />
                    <Route path="province" element={<ProvincePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
