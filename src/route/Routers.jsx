import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage, LoginPage, RegisterPage } from "../pages";
import { LayoutAdmin } from "../component/layout";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <LayoutAdmin>
              <DashboardPage />
            </LayoutAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
